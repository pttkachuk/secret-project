import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
//max-width: 1440px;
width: 100%;
//height: 150px;
overflow: hidden;
//outline: 1px solid red;
padding: 20px;
`;

const scroll = keyframes`
from{
    left:translateX(0);
}
to{
    transform: translateX(-100%);
}
`;

export const TickerBox = styled.div`
display: flex;
height: 50px;
align-items: center;
//width: calc(100% + 700px);
color: #d3d3d3;
background-color: transparent;

p{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    text-transform: uppercase;
    white-space: nowrap;
    animation: ${scroll} 60s linear infinite;
    animation-direction: reverse;
}
`;