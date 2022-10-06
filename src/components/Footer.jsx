import { Facebook, Instagram, Mail, Phone, Pinterest, Room } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    display:flex;
    height:30vh;
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
    padding:20px;
    flex: 1;
`;

const Header = styled.h3`
    margin-bottom:30px;
`;

const MidList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;

`;


const FooterRight = styled.div`
    padding:20px;
    flex: 1;
`;
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
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
        <FooterMid>
            <Header>Important Links</Header>
            <MidList>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </MidList>
        </FooterMid>
        <FooterRight>
            <Header>Contact</Header>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> Mirema Drive, Whitehouse
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +254 728 300 345
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight:"10px"}}/> roymasai001@gmail.com
            </ContactItem>

        </FooterRight>
    </Cont>
  )
}

export default Footer