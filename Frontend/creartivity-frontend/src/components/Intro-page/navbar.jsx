import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import "../../styles/navbar.css"

function NavbarCreartivity(){

    return(
        
        <Navbar expand="xl" className="navbar-custom" fixed="top">
           <Container fluid>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#">Creartivity</Navbar.Brand>
            <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="primary" size="sm" active className="ms-auto">
                Login
                </Button>
                <Button variant="secondary" size="sm" active style={{marginLeft:"10px"}}>
                Sign Up
                </Button>
            </Nav>
            </Navbar.Collapse>
            </Container>
      
        </Navbar>
    
    )
}
export default NavbarCreartivity  
