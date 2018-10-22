import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Button from "../Button/button";
import Timer from "../Timer/timer";
import logo from "../../assets/companyLogo.png";

const Header = () => {
  return (
    <header className=" color-white bg-color">
      <div className=" justify-content-between navbar ">
        <div className="col-2 logospc">
          <Link to="/" className=" color-white">
            <img src={logo} className="fitsize" />
          </Link>
        </div>
        <div className="col-4 text-right">
          <div className="ht50 wdt50 rounded-circle avatar-bg-color color-black text-uppercase d-inline-block text-center font32">
            OO
          </div>
          <div className="wdt100 d-inline-block">
            <Link to="/" className="nav-link logout-color text-center pr-0">
              Logout
            </Link>
          </div>
          <Timer />
        </div>
      </div>
    </header>
  );
};

export default Header;
