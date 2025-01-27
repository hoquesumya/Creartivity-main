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
    const arts = [art1, art2, art3, art4, art5, art6]
    const hover=[0, 3, 9, 3, 9, 4]


    const elements = ["Create", "Showcase", "Inspire"];
    const [currentElement, setCurrentElement] = useState(0);
    const [isHover, setIsHover] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover4, setIsHover4] = useState(false)
    const [isHover5, setIsHover5] = useState(false)
    const [isHover6, setIsHover6] = useState(false)
  

    const [hoverState, setHoverState] = useState({});

    const handleHover = (index, isHovering) => {
            setHoverState((prevState) => ({
            ...prevState,
            [index]: isHovering, // Update hover state for the specific index
            }));
        };
        
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
                    {
                        [0, 1, 2].map((colIndex) => (
                            <Col
                            key={colIndex}
                            style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "row",
                            }}
                            >
                            {
                                arts
                                .slice(colIndex * 2, colIndex * 2 + 2) // Take 2 images per column
                                .map((art, artIndex) => (
                                    <div
                                    key={colIndex * 2 + artIndex} // Ensure unique key across all columns and images
                                    className={`image-div-${colIndex * 2 + artIndex}`}
                                    style={{
                                        zIndex: hoverState[colIndex * 2 + artIndex] ? 100 : hover[colIndex * 2 + artIndex], // Adjust z-index based on hover state
                                    }}
                                    onMouseEnter={() => handleHover(colIndex * 2 + artIndex, true)} // Set hover to true for the current image
                                    onMouseLeave={() => handleHover(colIndex * 2 + artIndex, false)} // Set hover to false when mouse leaves
                                    >
                                    <img src={art} style={{ width: "100%", height: "100%" }} alt={`art-${colIndex * 2 + artIndex}`} />
                                    </div>
                                ))
                            }
                            </Col>
                        ))
                    }


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