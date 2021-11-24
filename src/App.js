import React from 'react';
import { Routes, Route, Link,Outlet} from "react-router-dom";
import ShopComponent from './pages/shop/shop.component'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Sign from './pages/sign-in-up/sign-in-up';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App(props) {
  
  
  return (
  <div>
<Header />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopComponent/>}/> 
      <Route path='/signin' element={<Sign/>}/> 
      
    </Routes>
  </div>
    
  )
     

}

export default App;
