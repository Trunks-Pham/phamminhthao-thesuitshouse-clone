import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NewsPage from './pages/NewsPage';
import PolicyPage from './pages/PolicyPage'; 
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PaymentPage from './pages/PaymentPage'; 
import NewsDetail from './pages/NewsDetailPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const updateCart = (newCart) => {
    setCart(newCart);
  };

  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/policy" element={<PolicyPage />} /> 
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="/account" element={<AccountPage />} />
          <Route path="/products" element={<ProductsPage />} /> 
          <Route path="/news/:id" element={<NewsDetail />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
