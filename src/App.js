import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import ShopComponent from "./pages/shop/shop.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Sign from "./pages/sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./user/user.actions";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {

  unsubscribeFromAuth = null;

  //onAuthStateChanged is a method on firebase lirbary and geting user from object returned from google auth
  
  componentDidMount() {

   const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth); // if user is unsubscribed than user object is empty. State is cleared
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
