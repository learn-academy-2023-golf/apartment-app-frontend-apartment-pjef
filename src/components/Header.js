import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <header>
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-flex justify-content-around align-items-center gap-5 w-100 p-3"
      >
        <NavItem>
          <NavLink className="text-light" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light" to="/index">
            View Listings
          </NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink className="text-light" to="/myapartments">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" to="/new">
                Create Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" to="#">
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
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
          </>
        )}
      </Nav>
    </header>
  );
};

export default Header;
