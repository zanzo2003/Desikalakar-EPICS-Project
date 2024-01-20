import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaHome } from 'react-icons/fa';

import React from 'react'

function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <FaHome/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                   <Nav className='ms-auto'>
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
