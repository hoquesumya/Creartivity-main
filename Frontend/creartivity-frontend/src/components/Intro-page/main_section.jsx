import {React} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/frontPage/main_section.css"

import { useEffect, useState } from 'react';
import art1 from "/assets/art1.jpg"
import art2 from "/assets/art2.jpg"
import art3 from "/assets/art3.jpg"
import art4 from "/assets/art4.jpg"
import art5 from "/assets/art5.jpg"
import art6 from "/assets/art6.jpg"

function Main_sections({isLogin, isSignUp}){
    const colors = ["#930b9f","#80230A", "#023623"]


    const elements = ["Create", "Showcase", "Inspire"];
    const [currentElement, setCurrentElement] = useState(0);
    const [isHover, setIsHover] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover4, setIsHover4] = useState(false)
    const [isHover5, setIsHover5] = useState(false)
    const [isHover6, setIsHover6] = useState(false)
  
  
    // Update current element every 3 seconds (you can adjust this as per requirement)
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentElement((prev) => (prev + 1) % elements.length);
      }, 3000);
      return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <>
        <Container fluid className={isLogin || isSignUp? "main_intro_login" : "main_intro"} style={{height:"100vh"}}>
            <Row style={{height:"100vh", backgroundColor:"#ECE9E7"}}>
                <Row style={{ height: "40%", 
                display:"flex",
                flexDirection:"column",
                "justifyContent": "center",
                alignItems:"center",
                position:"relative"
                }}>
                    {elements.map((element,index) => {
                     const isCurrent = index === currentElement;
                        return(
                        <div style={{
                            position:"absolute",
                            textAlign:"center",
                            animation: isCurrent? "slideInFromBottom 3s ease-in-out":"none",
                            opacity: isCurrent ? 1 : 0,
                            color:isCurrent?colors[index]:"none",
                            fontWeight:700,
                            fontSize:"60px",
                        }}
                        key={index}
                        >
                        {element}

                        </div>)
                    })}
                  
                
                </Row>
                <Row className="image_section" style={{ height: "60%"}}>
                    <Row style={{height:"70%", 
                    marginLeft:"4%", 
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
                                zIndex:isHover?100:0
                        }} 
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)} 
                      
                        >
                                <img src={art1} style={{width:"100%", height:"100%"}}></img>

                            </div>
                            <div style={{
                                "width":"50%",
                                "height":"100%",
                                "left":"40%",
                                "top":"10%",
                                "zIndex": isHover2?100:"3",
                                "position":"absolute",
                                backgroundColor:"lightcoral",
                              
                            }}
                            onMouseEnter={() => setIsHover2(true)}
                            onMouseLeave={() => setIsHover2(false)} 
                            >
                            <img src={art2} style={{width:"100%", height:"100%"}}></img>

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
                               
                            }}
                            
                            >
                                <img src={art3} style={{width:"100%", height:"100%"}}></img>

                            </div>
                            <div
                             style={{"width":"50%",
                             "height":"100%",
                             "left":"30%",
                             "top":"15%",
                             "zIndex":isHover4?100:"3",
                             "position":"absolute",
                             backgroundColor:"lightcoral"
                             }}
                             onMouseEnter={() => setIsHover4(true)}
                             onMouseLeave={() => setIsHover4(false)} 
                            >
                                <img src={art4} style={{width:"100%", height:"100%"}}></img>
                                
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
                                "zIndex": isHover5?100:"9",
                                right:"75%",
                                position:"absolute",
                                height: "100%",


                            }}
                            onMouseEnter={() => setIsHover5(true)}
                             onMouseLeave={() => setIsHover5(false)} 
                            >
                                <img src={art5} style={{width:"100%", height:"100%"}}></img>

                            </div>
                            <div
                             style={{"width":"50%",
                             "height":"100%",
                             "left":"25%",
                             "top":"10%",
                             "zIndex":isHover6?100:"4",
                             "position":"absolute",
                             backgroundColor:"lightcoral"
                             }}
                             onMouseEnter={() => setIsHover6(true)}
                             onMouseLeave={() => setIsHover6(false)} 
                            >
                                 <img src={art6} style={{width:"100%", height:"100%"}}></img>
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