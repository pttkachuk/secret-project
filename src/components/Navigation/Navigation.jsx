import React from "react";
import { PiChurchLight } from "react-icons/pi";
import {
  Home,
  LogoDiv,
  NavItem,
  NavList,
  StyledHeader,
  StyledNavContainer,
  StyledNavLink,
} from "./NavigationStyled";

const Navigation = () => {
  return (
    <StyledHeader>
      <StyledNavContainer>
        <LogoDiv to="/">
          <PiChurchLight size={26} />
          <Home>Parola di Fede</Home>
        </LogoDiv>
        <NavList>
          <NavItem>
            <StyledNavLink to="/">Chi siamo</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="">Culti</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/location">Dove siamo</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="">Contattaci</StyledNavLink>
          </NavItem>
        </NavList>
      </StyledNavContainer>
    </StyledHeader>
  );
};

export default Navigation;
