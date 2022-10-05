import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const CardInfo = styled.div`
 opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  display:flex;
  align-items: center;
  justify-content: center;
  z-index:3;
  transition: all 0.5s ease;
  cursor:pointer;
  `;

const Cont = styled.div`
  
  flex:1;
  margin:5px;
  min-width:350px;
  height:400px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf1ed;
  position: relative;

  &:hover ${CardInfo}{
    opacity:1;
  }
`;
const Circle = styled.div`
  width:290px;
  height:290px;
  border-radius:50%;
  background-color: white;
  position:absolute;
`;
const Img = styled.img`
  height:75%;
  z-index: 2;
`;

const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  margin:5px;
  transition:all 0.5s ease;

  &:hover{
    background-color:#fcf1ed;
    transform: scale(1.1);
  }
`;

const ProductItem = ({item}) => {
  return (
    <Cont>
      <Circle/>
      <Img src={item.img}/>
      <CardInfo>
          <Icon>
            <Search/>
          </Icon>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </CardInfo>

    </Cont>
  )
}

export default ProductItem