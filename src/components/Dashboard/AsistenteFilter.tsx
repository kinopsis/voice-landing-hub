
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface AsistenteFilterProps {
  onChange: (asistente: string | undefined) => void;
}

const AsistenteFilter: React.FC<AsistenteFilterProps> = ({ onChange }) => {
  const [asistentes, setAsistentes] = useState<string[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchAsistentes = async () => {
      try {
        const { data, error } = await supabase
          .from('transcripciones')
          .select('asistente')
          .eq('user_id', user.id)
          .order('asistente');
          
        if (error) throw error;
        
        // Extract unique asistentes
        const uniqueAsistentes = [...new Set(data.map(item => item.asistente))];
        setAsistentes(uniqueAsistentes);
      } catch (err) {
        console.error('Error fetching asistentes:', err);
      }
    };

    fetchAsistentes();
  }, [user]);

  return (
    <div className="space-y-2">
      <Label htmlFor="asistente-filter">Filtrar por Asistente</Label>
      <Select onValueChange={(value) => onChange(value === 'all' ? undefined : value)}>
        <SelectTrigger id="asistente-filter" className="w-full">
          <SelectValue placeholder="Todos los asistentes" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los asistentes</SelectItem>
          {asistentes.map((asistente) => (
            <SelectItem key={asistente} value={asistente}>
              {asistente}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default AsistenteFilter;
