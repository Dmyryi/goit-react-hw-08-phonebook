import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { Layout } from './Layout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    // Заменил строку на загрузочный индикатор
    <div>Loading user data...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />

        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
