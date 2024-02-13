import styled, { keyframes } from 'styled-components';

export const FatherDiv = styled.div`
outline: 1px solid red;
  width: 50%;
  height: 200px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: transparent;
  padding-left: 40%;
  //-webkit-filter: blur(20px);
`;

const catAnimation = keyframes`
  0%, 100% {
    margin-left: 100px;
  }
  50% {
    margin-left: -100px;
  }
`;

export const CatDiv = styled.div`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  //-webkit-animation: ${catAnimation} 15s infinite;
`;

const dogAnimation = keyframes`
  0%, 100% {
    margin-left: -250px;
  }
  50% {
    margin-left: -50px;
  }
`;

export const DogDiv = styled.div`
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  //-webkit-animation: ${dogAnimation} 5s infinite;
  position: relative;
  z-index: 4;
`;