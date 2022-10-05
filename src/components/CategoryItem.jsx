import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
flex: 1;
margin: 3px;
height:70vh;
position:relative;
`;
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity:1;

 
`;
const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Header = styled.h1`
  color:white;
  margin-bottom:20px;
  font-weight:bold;

`;

const Button = styled.button`
  border:none;
  padding:10px 20px;
  background-color:white;
  color:gray;
  font-weight:bold;
  cursor:pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Cont>
        <Img src = {item.img}/>
        <CardInfo>
            <Header>{item.header}</Header>
            <Button>SHOP-TODAY</Button>
            
        </CardInfo>

    </Cont>
  )
}

export default CategoryItem