import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function navbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="navbarBrand">
        <Link
          to="/"
          style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
        >
          Assessment tecnico - Mercado Libre
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="navbarText">
          <a style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}>
            Alexis Rocha
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
