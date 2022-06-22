import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="logo">
          Pakemellama <img width="60px" src="/llama.png" />
        </Navbar.Brand>
        <Nav className="justify-to-end">
          <Link className="infR" to="/Inicio">
            <b>Inicio</b>
          </Link>
          <Link className="infR" to="/Promociones">
            <b>Promociones</b>
          </Link>
          <Link className="infR" to="/Contactanos">
            <b>Contactanos</b>
          </Link>
          <Link className="infR" to="/TablaProductos">
            <b>Productos</b>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
