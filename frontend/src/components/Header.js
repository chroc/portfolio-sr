import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container className='my-3'>
                    <Navbar.Brand href="/">Sergio Rojas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks">
                            <Nav.Link href="#about"><i className="fa-regular fa-address-card"></i> About Me</Nav.Link>
                            <Nav.Link href="#projects"><i className="fa-solid fa-diagram-project"></i> Projects</Nav.Link>
                            <Nav.Link href="#resume"><i className="fa-solid fa-file"></i> Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;