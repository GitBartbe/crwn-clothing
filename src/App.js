import React from 'react';
import { Routes, Route, Link,Outlet} from "react-router-dom";
import ShopComponent from './pages/shop/shop.component'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Sign from './pages/sign-in-up/sign-in-up';
import {auth} from './firebase/firebase.utils'


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
  super();

  this.state= {
    currentUser: null
  }
  }

  unsubscribeFromAuth = null;

 componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });
    console.log(user);
  }) ;
 };

componentWillUnmount() {
  this.unsubscribeFromAuth();
} 

  render() {
    return (
      <div>
    <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopComponent/>}/> 
          <Route path='/signin' element={<Sign/>}/> 
          
        </Routes>
      </div>
        
      )
      
  }
     

}

export default App;
