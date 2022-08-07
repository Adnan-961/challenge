import React from "react";
import "./styles.scss";
import search from "../../assets/images/search.png";
import logo from "../../assets/images/Asset 1@3x.png";
import bag from "../../assets/svgs/shopping-bag.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function Navv() {
  return (
    <>
      <Navbar bg="" expand="lg" className="mb-3 mx-3 mt-1">
        <Container fluid>
          <div className="search__input">
            <img src={search} alt="search" width="20px" />
            <input
              type="text"
              placeholder="Search by brand, category, item..."
            />
          </div>

          <div className="logo__conatiner">
            <img src={logo} className="logo" alt="" />
          </div>

          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-lg"} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Nav className="d-flex justify-content-center ">
                <img src={logo} width="200" height="43" alt="" />
              </Nav>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <button className="sell__btn">Sell an item</button>
                <button className="signin__btn">Sign In</button>
                <button className="signup__btn">Sign Up</button>
                <img src={bag} alt="bag" className="nav__bag" width={30} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
