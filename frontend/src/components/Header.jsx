import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaHome } from 'react-icons/fa';
import { FaShoppingBag } from "react-icons/fa";

import React from 'react'

function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/home">
                    <FaHome/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                   <Nav className='ms-auto'>
                   <Nav.Link href='/'><FaShoppingBag/>Shop</Nav.Link>
                    <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
                    <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
