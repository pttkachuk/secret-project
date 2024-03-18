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

const Hero = () => {
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
        Chiesa Evangelica <br /> Parola Di Fede
      </HeroTitle>
    </Container>
  );
};

export default Hero;
