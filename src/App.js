import React from 'react';
import { Routes, Route, Link,Outlet} from "react-router-dom";

import './App.css';
import HomePage from './pages/homepage/homepage.component';



const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App(props) {
  
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop/hats' element={<HatsPage/>}/> 
      
    </Routes>
  )
     

}

export default App;
