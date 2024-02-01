import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  //width: 100%;
  //max-width: 1440px;
  display: flex;
  padding: 10px;
  `;

export const Cont = styled.div`
width: 100%;
outline: 1px solid black;
//padding: 10px;
//background-color: #808000;
//border-radius: 5px;
//box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Home = styled.h2`
//margin-left: 35px ;
font-family: Montserrat;
font-weight: 600;
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
//padding: 5px;
//outline: 1px solid red;
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