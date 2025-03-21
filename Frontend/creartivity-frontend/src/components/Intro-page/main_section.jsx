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
import mid_art2 from "/assets/mid_art2.jpg"
import mid_art1 from "/assets/pottery.avif"
import mid_art3 from "/assets/mid_art3.jpg"
import third_art1 from "/assets/mid_sec3.jpg"
import third_art2 from "/assets/mid_sec_3_2.jpg"
import shopping_cart from "/assets/shopping_cart.png"
import third_art3 from "/assets/mid_sec_3.3.jpg"
import { Button } from "@mui/material";

function Main_sections({isLogin, isSignUp}){
    const colors = ["#930b9f","#80230A", "#023623"]
    const arts = [art1, art2, art3, art4, art5, art6]
    const hover=[0, 3, 9, 3, 9, 4]


    const elements = ["Create", "Showcase", "Inspire"];
    const [currentElement, setCurrentElement] = useState(0);
  

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
            <Row  style={{height:"100vh",backgroundColor:"#D4AD73"}}>
                <Col className="mid-main" style={{
                
                     display:"flex",
                     "justifyContent":"center",
                     "alignItems":"center",
                     height:"30%",
                     position:"relative",
                     "marginTop":"19%"
                }}>
                 <div  className="mid-main1">
                        <img src={mid_art1} style={{"width":"100%"}}></img>
                    </div>
                    <div className="mid-main2"
                    
                    >
                    <Button
                    style={{backgroundColor:"whitesmoke",
                    borderRadius:"30px",
                    color:"black",
                    width:"50%",
                    padding:"5%",
                    "left":"20%",
                    boxShadow:"5px 10px 15px rgba(139, 69, 19, 0.5)"
                
                    }}
                    >
                        Upload
                    </Button>

                    </div>
                    <div
                    style={{
                    "position":"absolute",
                    "height":"100%",
                    "zIndex":"30",
                    "width":"29%",
                    "bottom":"10%"
                
                    }}
                    >
                    
                    <img src={mid_art2} style={{"width":"100%"}}></img>
                    </div>
                    <div className="mid-main3"
                    >
                    <img src={mid_art3} style={{"width":"100%"}}></img>

                    </div>
                
                </Col>
               
                <Col className="mid-main4"
                >
                <div style={{textAlign:"center", "color":"#ECE9E7","textShadow":"2px 2px 4px #D4AD73"}}>
                <h1>Exhibit Your Talent</h1>
                </div>
                <div
                style={{"width":"30%", textAlign:"center", padding:"5px"}}
                >
                <h5>Upload your work to your gallery and let the world see your talent</h5>
                </div>
                </Col>

            </Row>
            <Row  style={{height:"100vh", "backgroundColor":"#D9BFA0"}}>
                <Col className="third-main"
                style={{
                display:"flex",
                "justifyContent":"center",
                "alignItems":"center",
                position:"relative",
                marginTop:"20%"
                }}
                >
                <div id="third-main1"
                >
                    <img src={third_art1} style={{"width":"100%"}}>
                </img>


                </div>
                <div id="third-main2">
                <img src={third_art2} style={{"width":"100%"}}>
                </img>

                </div>
                <div id="third-main3">
                <img src={shopping_cart} style={{"width":"100%"}}>
                </img>
                </div>
                <div id="third-main4">
                <img src={third_art3} style={{"width":"100%"}}></img>
                </div>

                </Col>
                <Col style={{backgroundColor:"#F3CCC4",
                display:"flex",
                "flexDirection":"column",
                "justifyContent":"center",
                "alignItems":"center"
                
            }}
                
                >

                <div style={{"textAlign":"center", "color": "black", "textShadow":"1px 1px 1px black"}}>
                    <h1>SELL ART, CONNECT WITH WORLD</h1>
                </div>
                <div style={{"textAlign":"center", paddingLeft:"50px", paddingRight:"50px"}}>
                Unleash your creativity and let your art transcend boundaries. Sell your artwork to a global audience, connect with art enthusiasts around the world, and make your passion a part of someone’s story
                </div>
                </Col>

            </Row>
        </Container>
        
        </>

    )
}
export default Main_sections