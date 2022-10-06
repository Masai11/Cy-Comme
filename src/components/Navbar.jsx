import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Cont = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoSec = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Lang = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
const SearchCont = styled.div`
  border: 0.5px solid lightgray;
  display:flex;
  align-items: center;
  margin-left: 15px;
  padding:5px;
  t
`;
const Input = styled.input`
  border: none;
`;

const NavLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;
const Links = styled.div`
  font-size: 20px;
  cursor: pointer;
  text-style: none;
`;

const Navbar = () => {
  return (
    <Cont>
      <Wrapper>
        <LogoSec>
          <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>Cy-Comme.</Logo>
          </NavLink>
        </LogoSec>
        <SearchBar>
          <Lang>EN</Lang>
          <SearchCont>
            <Search style={{ color: "gray", fontSize: 18 }} />
            <Input />
          </SearchCont>
        </SearchBar>
        <NavLinks>
          <NavLink to="/product-list" style={{ color: "black", textDecoration: "none" }}>
            <Links>PRODUCTS</Links>
          </NavLink>

          <NavLink to="/single-product" style={{ color: "black", textDecoration: "none" }}>
            <Links>VIEW-ITEM</Links>
          </NavLink>

          <NavLink to="/cart"style={{ color: "black", textDecoration: "none" }}>
            <Links>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Links>
          </NavLink>
        </NavLinks>
      </Wrapper>
    </Cont>
  );
};

export default Navbar;
