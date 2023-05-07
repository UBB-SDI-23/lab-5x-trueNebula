import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CustomNavbar() {
    return (

            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="white-text strong">Cocken Ball Clients</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="white-text">Home</Nav.Link>
                            <Nav.Link href="/#/filter" className="white-text">Filter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
}
