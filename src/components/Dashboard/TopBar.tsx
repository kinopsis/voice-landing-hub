
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopBarProps {
  title: string;
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, toggleSidebar }) => {
  const { profile } = useAuth();

  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
          <Menu size={20} />
        </Button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-right mr-2">
          <p className="text-sm font-medium">{profile?.email || 'Usuario'}</p>
          <p className="text-xs text-gray-500">
            {profile?.ultima_sesion 
              ? `Último acceso: ${new Date(profile.ultima_sesion).toLocaleString('es-ES', {
                  day: 'numeric', 
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                })}` 
              : 'Sin registro de acceso'}
          </p>
        </div>
        <div className="h-10 w-10 rounded-full bg-voice-purple text-white flex items-center justify-center font-medium">
          {profile?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
