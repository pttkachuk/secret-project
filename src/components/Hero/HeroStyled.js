import styled, { keyframes } from 'styled-components';

const transformAnimation = keyframes`
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; } 
   80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; } `;

const movementOneAnimation = keyframes`    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }`;

const movementTwoAnimation = keyframes`
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.3);}`;

export const Container = styled.div`
	height: 450px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;

export const DivC = styled.div`
	min-height: 100vh;
	overflow: hidden;
	position:absolute;
	width: 100%;
	filter: blur(40px);
`;

export const ShapeBlob = styled.div`
	background:#FDDA00;
    position: absolute;
	height: 190px;
	width: 120px;
	border-radius: 40% 50% 30% 40%;
  	animation: 
		${transformAnimation} 18s ease-in-out infinite both alternate,
		${movementOneAnimation} 12s ease-in-out infinite both;
	opacity:.7;
	left: 73%;
	top: 40%;
`;

export const ShapeBlobOne = styled.div`
    background:#FDDA00;
    position: absolute;
	height: 150px;
	width: 170px;
	left: 40%;
	top: 41%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 8s ease-in-out infinite both alternate, ${movementTwoAnimation} 20s ease-in-out infinite both;
    `;

export const ShapeBlobTwo = styled.div`
    position: absolute;
	background:#4EAEFF;
	height: 150px;
	width: 150px;
	left: 55%;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 10s ease-in-out infinite both alternate, ${movementTwoAnimation} 10s ease-in-out infinite both;`;

export const ShapeBlobThree = styled.div`
    position: absolute;
	background:#0EAFFF;
	height: 150px;
	width: 150px;
	left: 15%;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 7s ease-in-out infinite both alternate, ${movementTwoAnimation} 23s ease-in-out infinite both;  `;

export const ShapeBlobFour = styled.div`
    position: absolute;
    background:#FDDA00;
	height: 100px;
	width: 80px;
	left: 5%;
	top: 38%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 17s ease-in-out infinite both alternate, ${movementTwoAnimation} 13s ease-in-out infinite both;`;

export const ShapeBlobFive = styled.div`
    position: absolute;
	background:#0085FF;
	height: 100px;
	width: 85px;
	left: 30%;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 12s ease-in-out infinite both alternate, ${movementTwoAnimation} 18s ease-in-out infinite both;`;

export const ShapeBlobSix = styled.div`
    position: absolute;
    background:#0EAFFF;
	height: 70px;
	width: 100px;
	right: 13%;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 5s ease-in-out infinite both alternate, ${movementTwoAnimation} 5s ease-in-out infinite both;
    `;
export const ShapeBlobSeven = styled.div`
    position: absolute;
	background:#0EAFFF;
	height: 100px;
	width: 75px;
	left: 11%;
	top: 35%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 9s ease-in-out infinite both alternate, ${movementTwoAnimation} 17s ease-in-out infinite both;  `;

export const ShapeBlobEight = styled.div`
    position: absolute;
	background:#FDDA00;
	height: 120px;
	width: 95px;
	left: 25%;
	top: 45%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 7s ease-in-out infinite both alternate, ${movementTwoAnimation} 23s ease-in-out infinite both;  `;

export const ShapeBlobNine = styled.div`
    position: absolute;
	background:#0EAFFF;
	height: 120px;
	width: 95px;
	left: 34%;
	top: 45%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 9s ease-in-out infinite both alternate, ${movementTwoAnimation} 19s ease-in-out infinite both;  `;

export const ShapeBlobTen = styled.div`
    position: absolute;
    background:#FDDA00;
	height: 100px;
	width: 80px;
	left: 7%;
	top: 47%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 12s ease-in-out infinite both alternate, ${movementTwoAnimation} 15s ease-in-out infinite both;`;

export const ShapeBlobEleven = styled.div`
    position: absolute;
	background:#FDDA00;
	height: 150px;
	width: 150px;
	left: 62%;
	top: 42%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 8s ease-in-out infinite both alternate, ${movementTwoAnimation} 13s ease-in-out infinite both;`;
export const ShapeBlobTwelve = styled.div`
    position: absolute;
    background:#0EAFFF;
	height: 100px;
	width: 80px;
	right: 7%;
	top: 47%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 12s ease-in-out infinite both alternate, ${movementTwoAnimation} 15s ease-in-out infinite both;`;
export const ShapeBlobThirteen = styled.div`
    position: absolute;
    background:#0EAFFF;
	height: 100px;
	width: 80px;
	right: 44%;
	top: 47%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 10s ease-in-out infinite both alternate, ${movementTwoAnimation} 19s ease-in-out infinite both;`;
//////////////////////////////////////////////
export const HeroTitle = styled.h1`
	font-family: Montserrat;
	font-size: 4em;
	letter-spacing: 2px;
	font-weight: 700;
	color: #fff;
	line-height: .9em;
	position: absolute;
	z-index: 4;
	text-shadow: 2px 3px 15px rgba(0,0,0,.15);`;



