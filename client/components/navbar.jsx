import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
  return (
    <>
      {['lg'].map(expand => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand className="justify-content-end" href="#home" >Smart Clothing</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Smart Clothing
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#catalog">Catalog</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
