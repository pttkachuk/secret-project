import React from "react";
//import { LiaBibleSolid } from "react-icons/lia";
import {
  Cont,
  Home,
  NavItem,
  NavLink,
  NavList,
  StyledNavContainer,
} from "./NavigationStyled";

const Navigation = () => {
  return (
    <nav>
      <Cont>
        <StyledNavContainer>
          <Home>Home</Home>
          <NavList>
            <NavItem>
              <NavLink href="#">Who we are</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Our service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">How to reach us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Where we are</NavLink>
            </NavItem>
          </NavList>
        </StyledNavContainer>
      </Cont>
    </nav>
  );
};

export default Navigation;
