import React from "react";
import { Nav, NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <Nav className="d-flex justify-items-around align-items-center gap-5 w-100">
        <NavItem>
          <NavLink active href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
  );
};

export default Header;
