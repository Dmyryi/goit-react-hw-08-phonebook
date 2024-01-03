import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return <div>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</div>;
};
