import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

//rafce : react arrow function component export (shortcut)
const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Tienda Online</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className="fa-solid fa-cart-shopping"></i> Mis Compras </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className="fa-solid fa-user"></i> Inicia Sesión</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header