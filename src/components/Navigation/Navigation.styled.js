import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavigationLink = styled(NavLink)`
  padding: 10px 25px;
  background-color: #e6e3dc;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  color: #353535;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1;
  position: relative;
  margin-right: 10px;
  box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    box-shadow: -10px -10px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
`;

export const NavigationMenu = styled.nav`
  padding: 12px;
`;
