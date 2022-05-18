import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

//rafce : react arrow function component export (shortcut)
const Header = () => {
  return (
    <header>
        <Navbar bg="light" variant="light" expand = 'lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>Test Site</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end flex-grow-1 pe-3'>
                        <Nav.Link href='/cart'><i className="fa-solid fa-cart-shopping"></i> Mis Compras </Nav.Link>
                        <Nav.Link href='/login'><i className="fa-solid fa-user"></i> Inicia Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header