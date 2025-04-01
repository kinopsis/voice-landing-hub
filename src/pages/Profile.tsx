
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from '@/components/Dashboard/Sidebar';
import TopBar from '@/components/Dashboard/TopBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, User, Clock } from 'lucide-react';

const Profile = () => {
  const { user, profile, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const profileItems = [
    {
      icon: Mail,
      label: 'Correo electrónico',
      value: profile?.email || user.email || 'No disponible'
    },
    {
      icon: User,
      label: 'Usuario',
      value: user.id
    },
    {
      icon: Clock,
      label: 'Último inicio de sesión',
      value: profile?.ultima_sesion
        ? new Date(profile.ultima_sesion).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        : 'No disponible'
    }
  ];

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
        <TopBar title="Perfil" toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-6">
          <Card className="mb-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Información de Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-voice-purple text-white flex items-center justify-center text-3xl font-medium">
                    {(profile?.email || user.email || 'U').charAt(0).toUpperCase()}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {profileItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-voice-purple/10 text-voice-purple">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Profile;
