import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRefresh = !isRefreshing && !isLoggedIn;
  return shouldRefresh ? <Navigate to={redirectTo} /> : Component;
};
