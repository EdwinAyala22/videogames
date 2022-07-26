// import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logoNav from '../Assets/img/logoNav.jpg';
import './navbar.css';

const NavbarApp = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="p-2">
            <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center">
                <img
                    src={logoNav}
                    width="70"
                    height="70"
                    className="p-1 navLogo"
                    alt="React Bootstrap logo"
                /> Video Games</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#cap">Capitulos</Nav.Link>
                    <Nav.Link href="#pers">Personajes</Nav.Link>
                    <Nav.Link href="#planet">Planetas</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarApp
