
import React from 'react'
import styled from 'styled-components'
import { productItems } from '../Data'
import ProductItem from './ProductItem'

const Cont = styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  background-color:f5fbfd;


`
const Products = () => {
  return (
    <Cont>
        {productItems.map(item =>(
            <ProductItem key={item.id} item={item} />
        ))}

    </Cont>
  )
}

export default Products