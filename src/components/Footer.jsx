import { Facebook, Instagram, Pinterest } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    display:flex;
`;
const FooterLeft = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    flex: 1;
`;
const Logo = styled.h1`

`;

const Description = styled.p`
    margin:20px 0px;
`;

const SocialsCont = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:15px;
    color:white;
    background-color: #${props=>props.color};
`;


const FooterMid = styled.div`
 flex: 1;
`;


const FooterRight = styled.div`
flex: 1;
`;


const Footer = () => {
  return (
    <Cont>
        <FooterLeft>
            <Logo>Cy-Comme.</Logo>
            <Description>
                A wide array of luxury clothing that showcases the designers mantra forever feminine.From summer wears to lounge wears, our pieces are thoughtfully created for women who want to look flawless and confident at any event.
                
            </Description>
            <SocialsCont>
               <SocialIcon color="3B5999"><Facebook /></SocialIcon> 
               <SocialIcon color='E4405F'><Instagram/></SocialIcon> 
               <SocialIcon color='E60023'><Pinterest/></SocialIcon> 
               
            </SocialsCont>
        </FooterLeft>
        <FooterMid></FooterMid>
        <FooterRight></FooterRight>
    </Cont>
  )
}

export default Footer