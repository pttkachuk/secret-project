import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterWrapper = styled.div`
height: 150px;
padding: 40px 0 40px 0;
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
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const SocialDesc = styled.p`
margin: 0;
padding: 0;
margin-bottom: 5px;
font-family: Montserrat;
color: #d3d3d3;
font-weight: 300;
font-size: 14px;
`;
export const SocialDiv = styled.div`
margin-top: auto;
`;

export const Instagram = styled.a`
color: #d3d3d3;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #FDDA00;
}
`;

export const Facebook = styled.a`
color: #d3d3d3;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #0047AB;
}
`;

export const Youtube = styled.a`
color: #d3d3d3;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    color: #FF0000;
}
`;

export const LinkToContacts = styled(NavLink)`
color: #fff;
text-decoration:none;
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