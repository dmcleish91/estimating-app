import { useAuth } from '@/lib/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{ path: location.pathname }} />;
  }

  return children;
}
