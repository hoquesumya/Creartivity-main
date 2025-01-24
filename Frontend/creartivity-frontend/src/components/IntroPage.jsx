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
    const toggleSignUp = () => {
        setSignUp((prev) => {
          console.log("Previous Value:", prev); // Logs the previous value
          return !prev; // Updates the state
        });
      };
      return (
        <div className="Intro">
          <NavbarCreartivity
            isLogin={isLogin}
            funtionToggle={toggleLogin}
            isSignUp={isSignUp}
            funtionToggleSignup={toggleSignUp} // Fixed prop name
          />
          {isLogin && <LoginDiv funtionToggle={toggleLogin} />}
          {isSignUp && <SignupDiv funtionToggleSignup={toggleSignUp} />} {/* Fixed */}
          <Main_sections 
          isLogin={isLogin} 
          funtionToggle={toggleLogin} 
          isSignUp={isSignUp}
          funtionToggleSignup={toggleSignUp}
          />
        </div>
      );
    }

export default IntroPage