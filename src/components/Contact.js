import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="maindiv">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">About us</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Link to="/Contact">Contact us</Link>
            <Nav className="mr-auto">
              <Link to="/msg">Message us</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <h4 className="header">Contacts</h4>
      <ul>
        <li>Contacts1</li>
        <li>Contacts2</li>
        <li>Contacts3</li>
        <li>Contacts4</li>
        <li>Contacts5</li>
      </ul>
    </>
  );
}

export default Contact;
