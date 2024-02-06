import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  display: flex;
  padding: 10px;
  `;

export const Cont = styled.div`
width: 100%;
//outline: 1px solid white;
`

export const LogoDiv = styled.button`
display: flex;
background-color: transparent;
color: #fff;
transition: 0.3s;
border: none;
cursor: pointer;
&:hover{
  color: red;
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
color: #fff;
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
color: #fff;
text-decoration: none;
transition: all 0.3s ease-in-out;
&:hover{
  color: #FFBF00
}
`;
