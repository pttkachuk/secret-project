import styled from 'styled-components';

export const FooterWrapper = styled.div`
height: 100px;
padding: 20px 0 20px 0;
outline: 1px solid red;
`;

export const FooterDesc = styled.p`
margin: 0;
padding: 0;
font-family: Montserrat;
font-weight: 300;
font-size: 16px;
`;

export const FooterCont = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
gap: 100px;
`;

export const CopyrightText = styled.p`
margin: 0;
padding: 0;
padding-top: 10px;
font-family: Montserrat;
color: #d3d3d3;
font-weight: 300;
font-size: 14px;
`;

export const IconsContainer = styled.div`
padding: 0;
margin: 0;
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const SocialDiv = styled.div`
//margin-top:auto;
`;

export const Instagram = styled.a`
color: #fff;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #FDDA00;
}
`;

export const Facebook = styled.a`
color: #fff;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #0047AB;
}
`;

export const Youtube = styled.a`
color: #fff;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #FF0000;
}
`;