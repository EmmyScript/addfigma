import {Row } from "react-bootstrap"


import { Routes, Route } from "react-router-dom"

import Cart from "./pages/Cart"
import User from "./pages/User"
import Navbars from "./components/Navbars"
import ShoppingCart from "./components/ShoppingCart"
import Home from "./components/Home"




const App = () => {
  
  
  return (
    <>
    <div className="container-fluid ">
<Row className=" all-item">
  <Navbars/>
  <ShoppingCart/>
  <Home/>
  
      
      <Routes>
<Route path = "/cart" element = {<Cart/>}/>
<Route path = "/user" element = {<User/>}/>
<Route path = "/shopping" element = {<ShoppingCart/>}/>

      </Routes>
      </Row>
    </div>
    </>
  )
}

export default App