
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from '@/components/Dashboard/Sidebar';
import TopBar from '@/components/Dashboard/TopBar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Moon, Sun } from 'lucide-react';

const Settings = () => {
  const { user, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      toast.success('Modo oscuro activado');
    } else {
      document.documentElement.classList.remove('dark');
      toast.success('Modo claro activado');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

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
        <TopBar title="Configuración" toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-6">
          <Card className="mb-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Apariencia</CardTitle>
              <CardDescription>Personaliza el aspecto de la aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isDarkMode ? <Moon className="text-indigo-500" /> : <Sun className="text-amber-500" />}
                  <div>
                    <Label htmlFor="dark-mode">Modo Oscuro</Label>
                    <p className="text-sm text-gray-500">Cambia entre modo claro y oscuro</p>
                  </div>
                </div>
                <Switch 
                  id="dark-mode" 
                  checked={isDarkMode} 
                  onCheckedChange={toggleDarkMode} 
                />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Settings;
