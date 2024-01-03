import { useSelector } from 'react-redux';
import { UserEmail } from '../../redux/auth/selector';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 300px;
  margin-left: auto;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50px; /* Регулируйте размер аватара по вашему желанию */
  height: 50px; /* Регулируйте размер аватара по вашему желанию */
  margin-right: 10px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  padding: 8px;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const UserMenu = () => {
  const email = useSelector(UserEmail);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <Container>
        <Avatar
          src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_25.jpg"
          alt="Avatar"
        />
        <UserName> {email}</UserName>
        <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
      </Container>
    </div>
  );
};
