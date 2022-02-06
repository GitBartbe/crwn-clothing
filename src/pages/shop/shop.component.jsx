import React from "react";
import {Routes,Route} from 'react-router-dom'

import CollectionPage from "../category/collection.component.jsx";
import CollectionsOveriview from "../../components/collections-overview/collections-overiview.jsx";

const ShopPage = () => {
  
  return(
  <div className="shop-page">
    <Routes>
      <Route path='/' element={<CollectionsOveriview />}></Route>
      <Route path=':collectionId' element={<CollectionPage/>} ></Route>
    </Routes>
    
  </div>
)};



export default ShopPage