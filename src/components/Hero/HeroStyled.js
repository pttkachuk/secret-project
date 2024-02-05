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
	//background:#1F2024;
	height: 450px;
	display: flex;
	flex-direction: row;
	align-items: center;
	//justify-content: center;
	overflow: hidden;
	position: relative;
`;

export const DivC = styled.div`
	min-height: 100vh;
	overflow: hidden;
	position:absolute;
	width: 100%;
	filter: blur(40px);
/*   background: rgba(255,255,255,0.1) */
`;

export const ShapeBlob = styled.div`
	background:#26C3F9;
    position: absolute;
	height: 60px;
	width: 80px;
	border-radius: 40% 50% 30% 40%;
  	animation: 
		${transformAnimation} 18s ease-in-out infinite both alternate,
		${movementOneAnimation} 12s ease-in-out infinite both;
	opacity:.7;
	left: 75%;
	top: 40%;
`;

export const ShapeBlobOne = styled.div`
    background:#0085FF;
    position: absolute;
	height: 150px;
	width: 170px;
	left: 45%;
	top: 41%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 8s ease-in-out infinite both alternate, ${movementTwoAnimation} 20s ease-in-out infinite both;
    `;

export const ShapeBlobTwo = styled.div`
    position: absolute;
	background:#4EAEFF;
	height: 150px;
	width: 150px;
	left: 60%;
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
    background:#4EAEFF;
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
	width: 80px;
	left: 480px;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 12s ease-in-out infinite both alternate, ${movementTwoAnimation} 18s ease-in-out infinite both;`;

export const ShapeBlobSix = styled.div`
    position: absolute;
    background:#0EAFFF;
	height: 70px;
	width: 100px;
	right: 200px;
	top: 40%;
	transform: rotate(-180deg);
	animation: ${transformAnimation} 5s ease-in-out infinite both alternate, ${movementTwoAnimation} 5s ease-in-out infinite both;
    `;

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

//////////////////////////////////////////////

