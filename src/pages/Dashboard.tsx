
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from '@/components/Dashboard/Sidebar';
import TopBar from '@/components/Dashboard/TopBar';
import DashboardStats from '@/components/Dashboard/DashboardStats';
import TranscriptionTable from '@/components/Dashboard/Transcriptions/TranscriptionTable';
import AsistenteFilter from '@/components/Dashboard/AsistenteFilter';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronDown, Calendar as CalendarIcon, X, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { generateMockTranscriptions } from '@/utils/mockData';
import { toast } from 'sonner';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fecha, setFecha] = useState<Date | undefined>(undefined);
  const [asistente, setAsistente] = useState<string | undefined>(undefined);
  const [isGeneratingData, setIsGeneratingData] = useState(false);

  // Loading or not authenticated
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const clearFilters = () => {
    setFecha(undefined);
    setAsistente(undefined);
  };

  const handleGenerateData = async () => {
    if (!user) return;
    
    setIsGeneratingData(true);
    try {
      await generateMockTranscriptions(user.id);
      toast.success('¡Datos de ejemplo generados!');
    } catch (error) {
      console.error('Error generating mock data:', error);
      toast.error('Error al generar datos de ejemplo');
    } finally {
      setIsGeneratingData(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 z-20 bg-black/50 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           onClick={() => setIsSidebarOpen(false)}>
        <div className="h-full w-64 bg-white" onClick={(e) => e.stopPropagation()}>
          <Sidebar />
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <div className="md:pl-64 min-h-screen">
        <TopBar title="Dashboard" toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-6">
          <DashboardStats />
          
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Filtros</CardTitle>
              <Button 
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleGenerateData}
                disabled={isGeneratingData}
              >
                <Database size={16} />
                {isGeneratingData ? 'Generando...' : 'Generar datos de ejemplo'}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Fecha</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !fecha && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {fecha ? format(fecha, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={fecha}
                        onSelect={setFecha}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <AsistenteFilter onChange={setAsistente} />
                
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="flex items-center gap-2"
                    disabled={!fecha && !asistente}
                  >
                    <X size={16} />
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Transcripciones de Llamadas</CardTitle>
            </CardHeader>
            <CardContent>
              <TranscriptionTable fecha={fecha} asistente={asistente} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
