import React from 'react'
import styled from 'styled-components'


const Cont = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px;
    display:flex;
    justify-content: space-between;
`;

const Logo = styled.div`

`;
const Search = styled.div`
  
`;
const NavLinks = styled.div`
  
`;

const Navbar = () => {
  return (
    <Cont>
      <Wrapper>
        <Logo>Cy-Comme</Logo>
        <Search>Search</Search>
        <NavLinks>Register</NavLinks>
      </Wrapper>
    </Cont>
  )
}

export default Navbar