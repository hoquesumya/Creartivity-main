import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import "../../styles/frontPage/navbar.css"
import { BorderColor } from "@mui/icons-material";

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
                <Button variant="primary" size="xsm" active 
                onClick={funtionToggle}
                style={{backgroundColor:"#80230A",
                 boxShadow:" 0 4px 12px rgba(0, 0, 0, 0.3)",
                 BorderColor:"white"}}
                >
                Login
                </Button>
                <Button variant="secondary" size="xsm" active style={{marginLeft:"10px", 
               }} 
                onClick={funtionToggleSignup}>
                Sign Up
                </Button>
            </Nav>
            </Navbar.Collapse>
            </Container>
      
        </Navbar>
    
    )
}
export default NavbarCreartivity  
