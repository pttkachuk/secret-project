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
              <NavLink href="#">Contatti</NavLink>
            </NavItem>
          </NavList>
          {/* <select>
            <option>ita</option>
            <option>ukr</option>
            <option>rus</option>
            <option>eng</option>
          </select> */}
        </StyledNavContainer>
      </Cont>
    </nav>
  );
};

export default Navigation;
