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
  flex: 1;
`;
const Search = styled.div`
  flex: 1;
  
`;
const Lang = styled.span`
  font-size: 14px ;
  cursor: pointer;
`;
const NavLinks = styled.div`
  flex: 1;
  
`;

const Navbar = () => {
  return (
    <Cont>
      <Wrapper>
        <Logo>Cy-Comme</Logo>
        <Search>
          <Lang>EN</Lang>
        </Search>
        <NavLinks>Register</NavLinks>
      </Wrapper>
    </Cont>
  )
}

export default Navbar