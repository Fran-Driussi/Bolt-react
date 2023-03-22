import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Welcome from './components/Welcome'
import Contact from './components/Contact'
import Cart from './components/Cart';
import CartContext from './context/CartContext';







const App = () => {

  return (
    

  <CartContext>
  <BrowserRouter>

    <NavBar />

    <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      
      
  </BrowserRouter>
  </CartContext>
  )
}

export default App


