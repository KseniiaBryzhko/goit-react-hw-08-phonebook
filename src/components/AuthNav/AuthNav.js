import { AuthNavList } from './AuthNav.styled';
import { NavigationLink } from 'components/Navigation/Navigation.styled.js';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavList>
        <li>
          <NavigationLink to="/register">Register</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/login">Log in</NavigationLink>
        </li>
      </AuthNavList>
    </div>
  );
};
