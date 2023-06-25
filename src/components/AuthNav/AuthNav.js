import { AuthNavList, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavList>
        <li>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">Log in</StyledNavLink>
        </li>
      </AuthNavList>
    </div>
  );
};
