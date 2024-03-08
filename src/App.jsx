import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from './Components/Footer/Footer';
import { CartProvider } from './Components/CartContext/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout'

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/condition/:condition' element={<ItemListContainer />} />
        <Route path='/genre/:genre' element={<ItemListContainer />} />
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
