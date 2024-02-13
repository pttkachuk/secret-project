import React from "react";
import {
  MovingStripContainer,
  MovingStripWrapper,
  MovingText,
} from "./RepeatWordCompStyles";

const RepeatWordComponent = () => {
  return (
    <MovingStripContainer>
      <MovingStripWrapper>
        <MovingText>CHIESA EVANGELICA BERGAMO</MovingText>
        <MovingText>ЄВАНГЕЛЬСЬКА ЦЕРКВА БЕРГАМО</MovingText>
        <MovingText>ЕВАНГЕЛЬСКАЯ ЦЕРКОВЬ БЕРГАМО</MovingText>
        <MovingText>EVANGELICAL CHURCH BERGAMO</MovingText>
      </MovingStripWrapper>
    </MovingStripContainer>
  );
};

export default RepeatWordComponent;
