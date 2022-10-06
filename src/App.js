import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import Cart from "./pages/Cart";

import SingleProduct from "./pages/SingleProduct";
// import Navbar from "./components/Navbar";


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      
      break;
    case "/ProductList":
      component = <ProductList/>
        
      break;

    case "/SingleProduct":
      component = <SingleProduct/>

      break;

    case "/Cart":
      component = <Cart/>

      break;
    default:
      break;
  }
  return (
      <>
      {/* <Navbar/> */}
      
      {component}
      </>
      
      // <ProductList/>
      // <SingleProduct/>
      
    
  );
}

export default App;
