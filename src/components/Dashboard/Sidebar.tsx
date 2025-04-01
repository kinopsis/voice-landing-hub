
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LayoutDashboard, User, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const { signOut } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Perfil', path: '/profile' },
    { icon: Settings, label: 'Configuración', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0 z-10 shadow-sm">
      <div className="p-6">
        <h1 className="text-2xl font-bold font-display">
          A<span className="text-voice-blue">VOZ</span>IA
        </h1>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-voice-light-purple/20 hover:text-voice-purple transition-colors
                  ${isActive ? 'bg-voice-light-purple/20 text-voice-purple font-medium' : ''}
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li className="mt-8">
            <button
              onClick={signOut}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors w-full"
            >
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
