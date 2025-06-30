import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Code2, Play, FileText, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function BottomNavigation() {
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Examples', href: '/examples', icon: Code2 },
    { name: 'Compiler', href: '/compiler', icon: Play },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Profile', href: user ? '/profile' : '/login', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/profile' && !user) {
      return location.pathname === '/login' || location.pathname === '/register';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                active
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
              {active && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}