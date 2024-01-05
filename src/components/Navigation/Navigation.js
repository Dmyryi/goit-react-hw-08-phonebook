import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && (
        <nav className={styles.navigation}>
          {' '}
          <NavLink to="/contacts">Contacts</NavLink>{' '}
        </nav>
      )}
    </>
  );
};
