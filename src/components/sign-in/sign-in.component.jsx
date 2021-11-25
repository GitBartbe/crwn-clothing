import React, { Component } from "react";
import FromInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../coustom-button/custom-button.component";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const log = e.target.value;
    const { value, name } = e.target;
    console.log(log);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I allredy have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
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

          <CustomButton type="Submit" >Sign</CustomButton>
        </form>
      </div>
    );
  }
}
