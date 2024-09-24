import React from "react";
import {
  Container,
  DivC,
  HeroTitle,
  ShapeBlob,
  ShapeBlobEight,
  ShapeBlobEleven,
  ShapeBlobFive,
  ShapeBlobFour,
  ShapeBlobNine,
  ShapeBlobOne,
  ShapeBlobSeven,
  ShapeBlobSix,
  ShapeBlobTen,
  ShapeBlobThirteen,
  ShapeBlobThree,
  ShapeBlobTwelve,
  ShapeBlobTwo,
} from "./HeroStyled";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <DivC>
        <ShapeBlob />
        <ShapeBlobOne />
        <ShapeBlobTwo />
        <ShapeBlobThree />
        <ShapeBlobFour />
        <ShapeBlobFive />
        <ShapeBlobSix />
        <ShapeBlobSeven />
        <ShapeBlobEight />
        <ShapeBlobNine />
        <ShapeBlobTen />
        <ShapeBlobEleven />
        <ShapeBlobTwelve />
        <ShapeBlobThirteen />
      </DivC>
      <HeroTitle>
        {t("hero")} <br /> {t("hero1")}
      </HeroTitle>
    </Container>
  );
};

export default Hero;
