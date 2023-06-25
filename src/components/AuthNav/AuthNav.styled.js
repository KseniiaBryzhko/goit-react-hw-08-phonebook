import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 12px 8px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ffc800;
  }

  &:hover,
  &:focus {
    color: #ffc800;
  }
`;
