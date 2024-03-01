import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
box-sizing: border-box;
display: flex;
justify-content: center;
padding-top: 35px;
`;

export const StyledNavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const LogoDiv = styled(NavLink)`
margin: 0;
padding: 0;
display: flex;
text-decoration: none;
background-color: transparent;
color: #fff;
transition: 0.3s;
border: none;
cursor: pointer;
position: relative;

&::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #0085FF;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .3s ease;
}

&:hover::before{
    transform: scaleX(1);
    transform-origin: bottom left;
}
`;

export const Home = styled.h2`
margin-left: 10px;
font-family: Montserrat;
font-weight: 600;
transition: 0.3s;
color: #fff;
`

export const NavList = styled.ul`
display: flex;
align-items: center;
text-align: center;
gap: 15px;

`;

export const NavItem = styled.li`
`;

export const StyledNavLink = styled(NavLink)`
font-family: Montserrat;
font-weight: 400;
color: #fff;
text-decoration: none;
transition: 0.3s;
position: relative;

&::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #0085FF;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .3s ease;
}

&:hover::before{
    transform: scaleX(1);
    transform-origin: bottom left;
}
`;
