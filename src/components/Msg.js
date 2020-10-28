import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
function Msg() {
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
      <h4 className="header">Messages</h4>
      <ul>
        <li>Message1</li>
        <li>Message2</li>
        <li>Message3</li>
        <li>Message4</li>
        <li>Message5</li>
      </ul>
    </>
  );
}

export default Msg;
