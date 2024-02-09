import styled from 'styled-components';

export const ContactsSection = styled.section`
box-sizing: border-box;
display: flex;
justify-content: center;
`;

export const ContactsDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    padding: 20px;
    outline: 1px solid red;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;

export const MessageTitleDiv = styled.div`
padding: 20px;
//outline: 1px solid red;
max-width: 350px;
`;

export const FormDiv = styled.div`
height: 100%;
width: 100%;
max-width: 550px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
outline: 1px solid red;
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
`;