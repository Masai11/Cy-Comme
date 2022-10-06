import React from "react";
import Home from "./pages/Home";


import ProductList from "./pages/ProductList";

import Cart from "./pages/Cart";

import SingleProduct from "./pages/SingleProduct";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  
  return (
    
    <Router>
    {/* <Navbar /> */}
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product-list' element={<ProductList/>} />
        <Route path='/single-product' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        
    </Routes>
    </Router>
      
    
  );
}

export default App;
