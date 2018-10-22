import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  bg-color">
      <ul className="nav justify-content-center color-white">
        <li className="nav-item">
          <NavLink className="nav-link color-white " to="/">
            Service
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link color-white" to="/">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link color-white " to="/">
            History
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
