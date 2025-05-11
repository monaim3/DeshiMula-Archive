import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import ProductDeatils from './components/ui/ProductDeatils';
import DeshiMulaDeatils from './components/ui/DeshiMulaDeatils';

 export const cartContext = createContext();
function App() {
    const [cart,setCart]=useState([])
    const [wishList,setWishList]=useState([])
   
  return (
       <cartContext.Provider value={{ cart, wishList, setCart, setWishList }}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="dashboard" element={<Dashboard />} />
           <Route path="product/:id" element={<ProductDeatils/>} />
           <Route path="details/:id" element={<DeshiMulaDeatils/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
