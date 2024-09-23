import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
box-sizing: border-box;
display: flex;
justify-content: center;
padding: 35px 0 35px 0;
`;

export const StyledNavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 0 35px 0 35px;
`;

export const LogoDiv = styled(NavLink)`
margin: 0;
padding: 0;
display: flex;
background-color: transparent;
color: #fff;
border: none;
cursor: pointer;
text-decoration: none;
transition: 0.3s;

`;


export const Home = styled.h2`
margin-left: 10px;
font-family: Montserrat;
font-weight: 600;
color: #fff;
transition: 0.3s;


`

export const NavList = styled.ul`
display: flex;
align-items: center;
text-align: center;
gap: 15px;

`;

export const NavItem = styled.li`
:hover{
    color: #4EAEFF;
}
`;

export const StyledNavLink = styled(NavLink)`
font-family: Montserrat;
font-weight: 400;
color: #fff;
text-decoration: none;
transition: 0.3s;
//position: relative;


`;
