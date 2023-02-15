import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/logo.jpg';
const Header = () => {
  return (
    <>
      <div className="MainHeader bg-light p-4">
        <div className="mx-4 w-100 d-flex align-items-center ">
          <NavLink
            className="me-4"
            to="/"
          >
            <img
              src={logo}
              alt="my logo img"
            />
          </NavLink>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
