import React from "react";
import { CatDiv, DogDiv, FatherDiv } from "./BubbleTroubleStyled";

const BubbleTrouble = () => {
  return (
    <FatherDiv className="father-div">
      <CatDiv className="cat" />
      <DogDiv className="dog" />
    </FatherDiv>
  );
};

export default BubbleTrouble;
