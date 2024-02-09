import React from "react";
import RepeatWord from "../../helpers/RepeatWord";
import { Container, TickerBox } from "./TikckerStyled";

const Ticker = () => {
  return (
    <Container>
      <TickerBox>
        <RepeatWord word="Chiesa Evangelica Bergamo &#8226; " count={8} />{" "}
        <RepeatWord word="Chiesa Evangelica Bergamo &#8226; " count={8} />
      </TickerBox>
    </Container>
  );
};

export default Ticker;
