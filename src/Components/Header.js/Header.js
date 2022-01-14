import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
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
              <NavLink exact to="/" className="nav-link fw-bold">
                BurgerBuilder
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/order" className="nav-link fw-bold">
                Order
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
