import React from "react";
import {
  CopyrightText,
  Facebook,
  FooterCont,
  FooterDesc,
  FooterWrapper,
  IconsContainer,
  Instagram,
  LinkToContacts,
  SocialDesc,
  SocialDiv,
  Youtube,
} from "./FooterStyled";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <FooterWrapper>
        <FooterCont>
          <div>
            <FooterDesc>
              {t("footer")}
              <br />
              {t("footer1")}
            </FooterDesc>
            <CopyrightText>
              {t("copyright")}{" "}
              <LinkToContacts to="/contacts">{t("contact us")}</LinkToContacts>
            </CopyrightText>
          </div>
          <SocialDiv>
            <SocialDesc>{t("social")}</SocialDesc>
            <IconsContainer>
              <Instagram
                href="https://www.instagram.com/bergamo_church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare size={23} />
              </Instagram>
              <Facebook
                href="https://www.facebook.com/slovoveriparoladifedebergamo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size={23} />
              </Facebook>
              <Youtube
                href="https://www.youtube.com/@SlovoViryItaly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutubeSquare size={23} />
              </Youtube>
            </IconsContainer>
          </SocialDiv>
        </FooterCont>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
