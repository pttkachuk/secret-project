import React from "react";
import { PiChurchLight } from "react-icons/pi";
import {
  Cont,
  Home,
  LogoDiv,
  NavItem,
  NavLink,
  NavList,
  StyledNavContainer,
} from "./NavigationStyled";

const Navigation = () => {
  const handleClick = () => {
    console.log("clicked btn");
  };
  return (
    <header>
      <nav>
        <Cont>
          <StyledNavContainer>
            <LogoDiv onClick={handleClick}>
              <PiChurchLight size={26} />
              <Home>Parola di Fede</Home>
            </LogoDiv>
            <NavList>
              <NavItem>
                <NavLink href="#">Chi siamo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Culti</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Dove siamo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contattaci</NavLink>
              </NavItem>
            </NavList>
          </StyledNavContainer>
        </Cont>
      </nav>
    </header>
  );
};

export default Navigation;
