import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
box-sizing: border-box;
display: flex;
justify-content: center;
padding: 35px;
`;

export const StyledNavContainer = styled.div`
//outline: 1px solid red;
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const LogoDiv = styled(NavLink)`
margin: 0;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
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
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
//text-align: center;
gap: 10px;
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
font-size: 15px;
color: #fff;
text-decoration: none;
transition: 0.3s;
`;
