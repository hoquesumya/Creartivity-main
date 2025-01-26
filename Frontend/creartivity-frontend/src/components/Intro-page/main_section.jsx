import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/frontPage/main_section.css"
import { lightBlue } from "@mui/material/colors";

function Main_sections({isLogin, isSignUp}){
    return (
        <>
        <Container fluid className={isLogin || isSignUp? "main_intro_login" : "main_intro"} style={{height:"100vh"}}>
            <Row style={{height:"100vh", backgroundColor:"pink"}}>
                <Row style={{ height: "33.33%", backgroundColor: "pink"}}>
                Hello1
                </Row>
                <Row style={{ height: "66.67%", backgroundColor:"lightBlue"}}>
                    <Row style={{height:"80%", 
                    marginLeft:"5%", 
                    marginTop:"2%",
                }} 
                    className="gx-4"
                    >
                        <Col 
                        style=
                        {{
                            position: "relative",
                            display:"flex",
                            flexDirection:"row"
                        }}>
                            <div style={{
                                "width":"50%",
                            
                                backgroundColor:"lightcyan"
                        
                        }}>
                                h'

                            </div>
                            <div style={{
                                "width":"50%",
                                "height":"100%",
                                "left":"40%",
                                "top":"10%",
                                "z-index":"3",
                                "position":"absolute",
                                backgroundColor:"lightcoral"
                        
                        }}>

                            </div>
                        </Col>

                        <Col  style={{
                            position: "relative",
                            display:"flex",
                            flexDirection:"row"}}>
                    
                            <div 
                            
                            style={{
                                "width":"50%",
                                backgroundColor:"lightsalmon",
                                "position":"absolute",
                                "zIndex":"9",
                                "right":"65%",
                                height: "100%",
                               
                            }}>

                            </div>
                            <div
                             style={{"width":"50%",
                             "height":"100%",
                             "left":"30%",
                             "top":"15%",
                             "z-index":"3",
                             "position":"absolute",
                             backgroundColor:"lightcoral"
                             }}
                            >
                                
                            </div>
                        </Col>

                        <Col  style={{
                            position: "relative",
                            display:"flex",
                            flexDirection:"row"}}>
                    
                            <div 
                            
                            style={{
                                "width":"50%",
                                backgroundColor:"lightsalmon",
                                "zIndex":"9",
                                right:"70%",
                                position:"absolute",
                                height: "100%",

                            }}>

                            </div>
                            <div
                             style={{"width":"50%",
                             "height":"100%",
                             "left":"25%",
                             "top":"10%",
                             "z-index":"4",
                             "position":"absolute",
                             backgroundColor:"lightcoral"
                             }}
                            >
                                
                            </div>
                        </Col>


                    </Row>
                
                </Row>

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