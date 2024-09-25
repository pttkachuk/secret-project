import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
box-sizing: border-box;
display: flex;
justify-content: center;
padding: 35px;
`;

export const StyledNavContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LogoDiv = styled(NavLink)`
margin: 0;
//margin-right: 10px;
padding: 0;
display: flex;
align-items: center;
background-color: transparent;
color: #fff;
border: none;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
//outline: solid 1px red
`;


export const Home = styled.h2`
margin-left: 10px;
font-family: Montserrat;
font-weight: 600;
color: #fff;
transition: 0.3s;


`

export const NavList = styled.ul`
margin-left: auto;
margin-right:5px;
display: flex;
align-items: center;
text-align: center;
gap: 15px;
//outline: solid 1px red
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
