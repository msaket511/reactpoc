import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inputbox from "./Components/InputBox/inputbox";
import Header from "./Components/Header/header";
import Accordion from "./Components/Accordion/accordion";
import Footer from "./Components/Footer/footer";

import SignIn from "./Layouts/SignIn/signin";
import Dashboard from "./Layouts/Dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Inputbox labelText="Email" placeHolderText="Type Here" />
          <Header />
          <Footer />
          <Accordion />

           */}
          <Header />

          <Switch>
            {/* <Route path="/" component={SignIn} /> */}
            <Route path="/signIn" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>

          {/* <SignIn /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
