import styled from 'styled-components';
import { keyframes } from 'styled-components';

const moveStripAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const repeatTextAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MovingStripContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const MovingStripWrapper = styled.div`
  white-space: nowrap;
  position: relative;
  animation: ${moveStripAnimation} 10s linear infinite;
`;

export const MovingText = styled.span`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  padding-right: 50px;
  //position: absolute;
  display: inline-block;
  animation: ${repeatTextAnimation} 10s linear infinite;
`;