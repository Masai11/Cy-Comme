import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cont = styled.div``;

const Header = styled.h1`
    margin: 20px;
`;

const FilterCont = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Filter = styled.div`
    margin:20px;
    `;
const FilterTxt = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;

const  Select = styled.select`
    padding:10px;
    margin-right:20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Cont>
        <Navbar/>
        <Header>Dresses</Header>
        <FilterCont>
            <Filter><FilterTxt>Filter Products:</FilterTxt></Filter>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>S</Option>
                <Option>XS</Option>
                
            </Select>
            <Filter><FilterTxt>Sort Products:</FilterTxt></Filter>
            <Select>
                <Option selected>New</Option>
                <Option>Price(asc)</Option>
                <Option>Price(desc)</Option>
                
                
            </Select>  
        
        </FilterCont>
        <Products/>
        <Footer/>
        
        
    </Cont>
  )
}

export default ProductList