import React, {useState} from "react"
import NavbarCreartivity   from "./Intro-page/navbar"
import Main_sections from "./Intro-page/main_section"
import { Container } from "react-bootstrap"
import LoginDiv from "./Intro-page/login"
import SignupDiv from "./Intro-page/signup"
import "../styles/frontPage/intro.css"
//checkLogin={isLogin} toggleFunctio = {toggleLogin}
function IntroPage(){
    const [isLogin, setLogin] = useState(false);
    const [isSignUp, setSignUp] = useState(false);
    const toggleLogin = () => setLogin((prev) => !prev);
    const toggleSignUp = () => setSignUp((prev) => !prev);
    return(
        <div className="Intro">
            <NavbarCreartivity isLogin={isLogin} funtionToggle ={toggleLogin} isSignUp={isSignUp}funtionToggleSignup={toggleSignUp} ></NavbarCreartivity>
            {isLogin && <LoginDiv funtionToggle={toggleLogin}/>}
            {isSignUp && <SignupDiv functionToggle={toggleSignUp}/>}
            <Main_sections isLogin={isLogin} funtionToggle ={toggleLogin}></Main_sections> 
       </div>
        
    )
}
export default IntroPage