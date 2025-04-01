
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Transcripcion } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, DollarSign, Percent } from 'lucide-react';

const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalLlamadas: 0,
    duracionPromedio: '0m 0s',
    costoTotal: 0,
    conversionRate: 0
  });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Using type assertion to tell TypeScript this is valid
        const { data, error } = await supabase
          .from('transcripciones')
          .select('*')
          .eq('user_id', user.id) as any;
          
        if (error) throw error;
        
        const transcripciones = data as Transcripcion[];
        
        if (transcripciones.length === 0) {
          setLoading(false);
          return;
        }
        
        // Calculate stats
        const totalLlamadas = transcripciones.length;
        
        // Calculate total duration in seconds from all durations
        const totalDurationInSeconds = transcripciones.reduce((total, t) => {
          const parts = t.duracion.split(':');
          const hours = parseInt(parts[0]) || 0;
          const minutes = parseInt(parts[1]) || 0;
          const seconds = parseInt(parts[2]) || 0;
          return total + (hours * 3600 + minutes * 60 + seconds);
        }, 0);
        
        // Format average duration
        const avgDurationInSeconds = totalDurationInSeconds / totalLlamadas;
        const avgMinutes = Math.floor(avgDurationInSeconds / 60);
        const avgSeconds = Math.floor(avgDurationInSeconds % 60);
        const duracionPromedio = `${avgMinutes}m ${avgSeconds}s`;
        
        // Calculate total cost
        const costoTotal = transcripciones.reduce((total, t) => total + t.costo, 0);
        
        // Calculate conversion rate (booked appointments / total calls)
        const bookedAppointments = transcripciones.filter(t => t.estado_cita === 'Booked').length;
        const conversionRate = (bookedAppointments / totalLlamadas) * 100;
        
        setStats({
          totalLlamadas,
          duracionPromedio,
          costoTotal,
          conversionRate
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  const statCards = [
    {
      title: 'Total Llamadas',
      value: stats.totalLlamadas.toString(),
      icon: Phone,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Duración Promedio',
      value: stats.duracionPromedio,
      icon: Clock,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Costo Total',
      value: `$${stats.costoTotal.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Tasa de Conversión',
      value: `${stats.conversionRate.toFixed(1)}%`,
      icon: Percent,
      color: 'text-amber-500',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards.map((card, index) => (
        <Card key={index} className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{card.title}</CardTitle>
            <div className={`p-2 rounded-full ${card.bgColor}`}>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
              ) : (
                card.value
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
