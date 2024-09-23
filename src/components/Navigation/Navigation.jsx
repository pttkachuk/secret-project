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
import { useTranslation } from "react-i18next";
import LangSelect from "../LangSelect/LangSelect";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <StyledNavContainer>
        <LogoDiv to="/">
          <PiChurchLight size={26} />
          <Home>{t("logo")}</Home>
        </LogoDiv>
        <LangSelect />
        <NavList>
          <NavItem>
            <StyledNavLink to="/">{t("who we are")}</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="">{t("worship")}</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/location">{t("location")}</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/contacts">{t("contacts")}</StyledNavLink>
          </NavItem>
        </NavList>
      </StyledNavContainer>
    </StyledHeader>
  );
};

export default Navigation;
