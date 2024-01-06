import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CartContext from './Components/CartContext';
import ProductList from './Components/ProductList';
import CartProvider from './Components/CartProvider';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';

const App = () => {
  return (
    <>
    <CartProvider>
      <CartContext.Provider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/home' element={<ProductList />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='contactus' element={<Contactus />}></Route>
      </Routes>
      <Footer />
      </CartContext.Provider>
      </CartProvider>
    </>
  )
}
export default App;