import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import logo from "../images/logo.jpeg";
const Header = () => {
  return (
    <>
      <div className="MainHeader">
        <NavLink to="/">
          <img src={logo} alt="my logo img" />
        </NavLink>
        <Nav />
      </div>
    </>
  );
};

export default Header;
