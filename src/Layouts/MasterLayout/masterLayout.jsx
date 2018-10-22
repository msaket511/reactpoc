import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import SignIn from "../SignIn/signin";

const MasterLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
