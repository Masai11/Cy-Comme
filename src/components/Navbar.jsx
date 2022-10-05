
import { Search } from '@material-ui/icons';
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
const SearchBar = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  
`;
const Lang = styled.span`
  font-size: 14px ;
  cursor: pointer;
`;
const SearchCont = styled.div`
  border: 1px solid lightgray;
  display:flex;
  align-items: center;
`;
const NavLinks = styled.div`
  flex: 1;
  
`;

const Navbar = () => {
  return (
    <Cont>
      <Wrapper>
        <Logo>Cy-Comme</Logo>
        <SearchBar>
          <Lang>EN</Lang>
          <SearchCont>
              <Search/>
              input
          </SearchCont>
        </SearchBar>
        <NavLinks>Register</NavLinks>
      </Wrapper>
    </Cont>
  )
}

export default Navbar