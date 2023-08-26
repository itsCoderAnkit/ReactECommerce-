import Products from "./components/products";
import Header from "./components/Header.js/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";


function App() {
  const [cartIsShown,setCartIsShown] = useState(false)

  const showCartHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
  return (
    <div>
      {cartIsShown && <Cart onClose ={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Products></Products>
      
    </div>
  );
}
export default App;