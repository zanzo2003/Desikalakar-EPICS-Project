import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from  "react-redux";
import logo from "../assets/logo.png";

import React from "react";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
 
  return (
    <header style={{fontFamily: "'Philosopher', sans-serif"}}>
      <Navbar variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img src={logo} alt="DesiKalakar" id="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <LinkContainer to="/">
                <Nav.Link>
                  <FaShoppingBag />
                  Shop
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                  {
                  cartItems.length > 0 && ( 
                    <Badge pill bg = 'success' style={{marginLeft: '5px'}}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )
                  }
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <FaUser />
                  Sign In
                </Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
