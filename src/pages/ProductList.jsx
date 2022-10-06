import React from 'react'
import styled from 'styled-components'
import Produ

import Navbar from '../components/Navbar';

const Cont = styled.div``;

const Header = styled.h1`
    margin: 20px;
`;

const FilterCont = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Filter = styled.div`
    margin:20px;`;

const ProductList = () => {
  return (
    <Cont>
        <Navbar/>
        <Header>Dresses</Header>
        <FilterCont>
            <Filter>Filter1</Filter>
            <Filter>Filter2</Filter>
        
        </FilterCont>
        <Products/>
        
        
    </Cont>
  )
}

export default ProductList