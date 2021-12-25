import React, { Component } from "react";
import FromInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../coustom-button/custom-button.component";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

 
  handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      
    }
    catch (error) {
      console.log(error);
    } 
   
  };


  handleChange = async (e) => {
    
    const { value, name } = e.target;
    this.setState({ [name]: value });
    
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I allredy have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FromInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FromInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="button">
          <CustomButton type="submit" >Sign</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
