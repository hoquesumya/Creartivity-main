import React from "react"
import NavbarCreartivity   from "./Intro-page/navbar"
import Main_sections from "./Intro-page/main_section"
import { Container } from "react-bootstrap"

function IntroPage(){
    return(
        
        <div>
        
            <NavbarCreartivity></NavbarCreartivity>
           
            <Main_sections></Main_sections>
      </div>
        
    )
}
export default IntroPage