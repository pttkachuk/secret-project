import React from "react";
import {
  CopyrightText,
  Facebook,
  FooterCont,
  FooterDesc,
  FooterWrapper,
  IconsContainer,
  Instagram,
  SocialDiv,
  Youtube,
} from "./FooterStyled";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <FooterCont>
          <div>
            <FooterDesc>
              Jesu ti ama.
              <br />
              Ricordati cosa Lui ha fatto per te.
            </FooterDesc>
            <CopyrightText>
              © 2024. Chiesa Evangelica Bergamo. Tutti i diritti riservati.
            </CopyrightText>
          </div>
          <SocialDiv>
            <FooterDesc>Nostri social</FooterDesc>
            <IconsContainer>
              <Instagram
                href="https://www.instagram.com/bergamo_church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </Instagram>
              <Facebook
                href="https://www.facebook.com/slovoveriparoladifedebergamo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </Facebook>
              <Youtube
                href="https://www.youtube.com/@SlovoViryItaly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </Youtube>
            </IconsContainer>
          </SocialDiv>
        </FooterCont>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
