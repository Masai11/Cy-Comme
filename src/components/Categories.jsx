import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data';
import CategoryItem from './CategoryItem';

const Cont = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`;

const Categories = () => {
  return (
    <Cont>
        {categories.map(item => (
            <CategoryItem item = {item}/>
        ))}
    </Cont>
  )
}

export default Categories