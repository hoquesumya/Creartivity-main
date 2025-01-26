import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import "../../styles/frontPage/navbar.css"

function NavbarCreartivity({isLogin, funtionToggle,  isSignUp, funtionToggleSignup}){

    return(
        
        <Navbar expand="xl" className={isLogin || isSignUp ? "navbar-logged-in" : "navbar-custom"} fixed="top">
           <Container fluid>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#">Creartivity</Navbar.Brand>
            <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="primary" size="xsm" active onClick={funtionToggle}>
                Login
                </Button>
                <Button variant="secondary" size="xsm" active style={{marginLeft:"10px"}} onClick={funtionToggleSignup}>
                Sign Up
                </Button>
            </Nav>
            </Navbar.Collapse>
            </Container>
      
        </Navbar>
    
    )
}
export default NavbarCreartivity  
