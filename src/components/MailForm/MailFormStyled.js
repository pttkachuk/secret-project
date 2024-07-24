import styled, { keyframes } from 'styled-components';

export const ContactsSection = styled.section`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ContactsDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    padding: 20px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;

export const MessageTitleDiv = styled.div`
padding: 20px;
max-width: 350px;
`;

export const FormDiv = styled.div`
height: 100%;
width: 100%;
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ContactsTitle = styled.h2`
font-family: Montserrat;
font-size: 28px;
font-weight: 700;
color: #fff;
margin-bottom: 20px;
`;

export const ContactsDesc = styled.p`
margin: 0;
padding: 0;
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
color: #fff;
transition: 0.3s;
position: relative;

&::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #0085FF;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .3s ease;
}

&:hover::before{
    transform: scaleX(1);
    transform-origin: bottom left;
}
`;

/////////////////////////////////////////////////////////////

export const InputDiv = styled.div`
position: relative;
padding: 15px 0 0;
width: 100%;
max-width: 375px;
`;

export const StyledInput = styled.input`
width: 100%;
margin-bottom: 10px;
padding: 7px 0;

font-family: Montserrat;
font-weight: 400;
font-size: 14px;
color: #fff;
outline: 0;
background: transparent;

border:0;
border-bottom: 1px solid #d3d3d3;
transition: 0.2s;

&::placeholder{
    color: transparent;
}

&:placeholder-shown ~ .form_label{
font-size: 14px;
cursor: text;
top: 20px;
}

&:focus{
    ~ .form_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #4EAEFF;
    font-weight:600;    
  }
  padding-bottom: 6px;  
  font-weight: 400;
  border-width: 1px;
  border-image: linear-gradient(to right, #4EAEFF,#FDDA00);
  border-image-slice: 1;
}

&:required,&:invalid{
    box-shadow:none;
}
`;

export const StyledLabel = styled.label`
position: absolute;
top: 0;
display: block;
transition: 0.2s;
font-size: 14px;
color: #d3d3d3;
`;

export const StyledTextArea = styled.textarea`
//width: 100%;
max-width: 380px;
resize: none;
background: transparent;
border: 0;
outline: 0;
border-bottom: 1px solid #d3d3d3;
color: #fff;
margin-bottom: 15px;
transition: 0.2s;

&::placeholder{
    color: #d3d3d3;
    vertical-align: middle;
}

&:focus{
border-width: 1px;
border-image: linear-gradient(to right, #4EAEFF,#FDDA00);
border-image-slice: 1;
}
`;

export const StyledSendBtn = styled.button`
border: none;
background: transparent;
color: #fff;
font-family: Montserrat;
font-weight: 400;
font-size: 14px;
transition: 0.3s;
cursor: pointer;

&:hover{
    color: #FDDA00;
}
`;

/////////////////////////////////////////////////////////////

export const PhoneDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    padding: 20px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15%;
`;

export const PhoneDivTitle = styled.h2`
font-family: Montserrat;
font-size: 28px;
font-weight: 700;
color: #fff;
`;

export const PhoneTitleDiv = styled.div`
max-width: 350px;
text-align: center;
`;

export const StyledPhoneLink = styled.a`
text-decoration: none;
font-family: Montserrat;
font-size: 14px;
font-weight: 400;
color: #fff;
transition: 0.3s;
position: relative;

&::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: #0085FF;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .3s ease;
}

&:hover::before{
    transform: scaleX(1);
    transform-origin: bottom left;
}
`;

export const StyledPhoneTitle = styled.p`
margin: 0;
padding: 0;
font-family: Montserrat;
font-size: 18px;
font-weight: 400;
color: #fff;
margin-bottom: 5px;
`;

export const StyledPhoneItem = styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
padding: 10px;
`;

export const StyledPhoneList = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
gap: 20px;
`;

export const PhoneImage = styled.img`
display: block;
object-fit: cover;
height: 100%;
width: 100%;
max-width: 120px;
max-height: 120px;
border-radius:50%;
`;

/////////////////////////////////////////////////////////////

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Gradient = styled.div`
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(#4EAEFF, #FDDA00);
  animation: ${rotateAnimation} var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;