import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  display: flex;
  padding: 10px;
  `;

export const Cont = styled.div`
width: 100%;
//outline: 1px solid black;
`

export const LogoDiv = styled.button`
display: flex;
background-color: transparent;
//outline: 1px solid black;
transition: 0.3s;
border: none;
cursor: pointer;
&:hover{
  color: #6cb4ee;
}
 &:hover h2{
  color:inherit;
}

`;

export const Home = styled.h2`
margin-left: 10px;
font-family: Montserrat;
font-weight: 600;
transition: 0.3s;
color: black;
`

export const NavList = styled.ul`
margin-left: auto;
display: flex;
align-items: center;
text-align: center;
gap: 15px;

`;

export const NavItem = styled.li`
`;

export const NavLink = styled.a`
font-family: Montserrat;
font-weight: 400;
color: black;
text-decoration: none;
transition: 0.3s;
&:hover{
  color: #6cb4ee
}
`;