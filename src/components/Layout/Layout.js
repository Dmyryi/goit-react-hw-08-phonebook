import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import './Layout.module.css';
import { Suspense } from 'react';
export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </nav>
  );
};
