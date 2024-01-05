import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  const [activeTab, setActiveTab] = useState('');

  const switchToRegister = () => {
    setActiveTab('register');
  };

  const switchToLogin = () => {
    setActiveTab('login');
  };

  return (
    <div className={`${styles.container} ${styles[activeTab]}`}>
      <div className={styles.tabs}>
        <NavLink
          to="/register"
          className={`${styles.tab} ${
            activeTab === 'register' ? styles.active : ''
          }`}
          onClick={switchToRegister}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={`${styles.tab} ${
            activeTab === 'login' ? styles.active : ''
          }`}
          onClick={switchToLogin}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
