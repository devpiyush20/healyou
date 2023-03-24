import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../image/logo.png";
import "./NavBar.css";
import {GiHamburgerMenu} from "react-icons/gi"

const NavBar = () => {
  const [activelink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"><GiHamburgerMenu/></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activelink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={
                  activelink === "services"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#aboutus"
                className={
                  activelink === "aboutus"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutus")}
              >
                About Us
              </Nav.Link>
              <span className="navbar-text">
                <button className="vvd" onClick={() => console.log("Login")}>
                  <span>Login</span>
                </button>
                

                <button className="vvd" onClick={() => console.log("Signup")}>
                  <span>Signup</span>
                </button>
               
                </span>
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
