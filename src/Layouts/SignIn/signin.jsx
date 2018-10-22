import React, { Component } from "react";
import Inputbox from "../../Components/InputBox/inputbox";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

class SignIn extends Component {
  state = {
    userid: "",
    password: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  handleChange = (model) => {
    console.log(model);
  };
  render() {
    return (
      <div className="viewport">
        <div className="col-md-6 offset-md-3 border align-div-center">
          <label htmlFor="Sign In" className="font32">
            Sign In
          </label>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Inputbox
                labelText="User Name"
                placeHolderText="Enter user name"
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <Inputbox
                labelText="Password"
                placeHolderText="Enter password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
