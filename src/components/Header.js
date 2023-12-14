import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-flex justify-content-around align-items-center gap-5 w-100 bg-secondary p-1"
      >
        <NavItem>
          <NavLink className="text-light" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" to="/signup">
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" to="/signin">
            Log In
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
};

export default Header;
