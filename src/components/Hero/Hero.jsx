import React from "react";
import {
  Container,
  DivC,
  HeroTitle,
  ShapeBlob,
  ShapeBlobFive,
  ShapeBlobFour,
  ShapeBlobOne,
  ShapeBlobSix,
  ShapeBlobThree,
  ShapeBlobTwo,
} from "./HeroStyled";

const Hero = () => {
  return (
    <Container>
      <DivC>
        <ShapeBlob></ShapeBlob>
        <ShapeBlobOne></ShapeBlobOne>
        <ShapeBlobTwo></ShapeBlobTwo>
        <ShapeBlobThree></ShapeBlobThree>
        <ShapeBlobFour></ShapeBlobFour>
        <ShapeBlobFive></ShapeBlobFive>
        <ShapeBlobSix></ShapeBlobSix>
      </DivC>
      <HeroTitle>
        Chiesa Evangelica Ucraina
        <br />
        Bergamo
      </HeroTitle>
    </Container>
  );
};

export default Hero;
