import React from 'react';
import Menu from './components/Menu';
import Category from './components/Category';
import { Route, Routes } from 'react-router-dom';
import CategoryItemPage from './components/CategoryItemPage ';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import OrderPlacementForm from './components/OrderPlacementForm';
import History from './components/History';


const App = () => {
  return (

    
    <div>
      <Navbar/>

      <Routes>
     
        <Route
          path="/"
          element={
            <div>
              <Category />
              <Menu />
            </div>
          }
        />

       
        <Route path="/items/category/:categoryId" element={<CategoryItemPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/cart/checkout" element={<OrderPlacementForm/>} />
        <Route path='/history' element={<History/>}/>

      </Routes>
    </div>
  );
};

export default App;
