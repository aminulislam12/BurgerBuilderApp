import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
        className="Navigation"
        container={false}
      >
        <div className="container">
          <NavbarBrand>
            <img src={Logo} alt="Logo" width="120px" />
          </NavbarBrand>
          <Nav className="" navbar>
            <NavItem>
              <NavLink href="/">SomeThing</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
