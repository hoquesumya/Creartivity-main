import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/frontPage/main_section.css"

function Main_sections({isLogin, isSignUp}){
    return (
        <>
        <Container fluid className={isLogin || isSignUp? "main_intro_login" : "main_intro"} style={{height:"100vh"}}>
            <Row style={{height:"100vh", backgroundColor:"pink"}}>
                <Col>
                Hello
                </Col>

            </Row>
            <Row  style={{height:"100vh",backgroundColor:"#d8ebc6"}}>
                <Col>
                Hello
                </Col>

            </Row>
            <Row  style={{height:"100vh", backgroundColor:"#e6dad3"}}>
                <Col>
                Hello
                </Col>

            </Row>
        </Container>
        
        </>

    )
}
export default Main_sections