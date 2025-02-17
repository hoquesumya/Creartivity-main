import {React, useState, useRef} from "react";
import Form from 'react-bootstrap/Form';
import "../../styles/frontPage/login.css"
import { Button } from "react-bootstrap";
import ClearIcon from '@mui/icons-material/Clear';
function LoginDiv({funtionToggle, functionToggleSignup}){
    //const [email, setEmail] = useState("name@example.com")
    //const [passWord, setPassWord] = useState("")
    const emailRef = useRef(null)
    const passWordRef = useRef(null)
    function isEmailValid(validate_email){
        var res = true
        if (validate_email === "name@example.com"){
            return false
        }
        else{
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
            res = emailRegex.test(validate_email)
        }
        return res
    }
 
    const handleSubmit = (event)=>{
        event.preventDefault()
       emailRef.current.focus() //foucs on the dom element that ref is referencing. will appear after refresh

        const email = emailRef.current.value;
        const passWord = passWordRef.current.value;
        console.log(email, passWord)
        if (isEmailValid(email) && passWord.length > 6){
            alert("login is successful")
        }else{
            alert("login is failed")
        }
    }

    return(
      <>
      <div className="main-login">
        <div
        style={{
            display:"flex",
             flexDirection:"column",
             justifyContent:"end",
             alignItems:"end"
        }}
        >
            <Button onClick={funtionToggle}>
               <ClearIcon></ClearIcon>
            </Button>

        </div>
        <div>
            <h2 style={{textAlign:"center"}}>Welcome to Creartivity</h2>
        </div>
      <div className="login">
        <div
          style={{display:"flex", flexDirection:"column",
         justifyItems:"center",
    }}
        >
        <Form style={{
         display:"flex", flexDirection:"column",
         justifyItems:"center",
         alignItems: "center",
         paddingTop:"10px"
         
         }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:"60%"}}>
            <Form.Label>Email</Form.Label>
            <Form.Control ref = {emailRef} type="email" placeholder="name@example.com"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword"  style={{width:"60%"}}>
                <Form.Label>
                Password
                </Form.Label>
                <Form.Control ref = {passWordRef} type="password" placeholder="Password" />
            </Form.Group>
            <p>Forgot Password?</p>
            <Button variant="primary" size="lg"  style={{width:"60%"}} onClick={handleSubmit}>
                Log in
            </Button>
         </Form>
         <p id = "or"> OR </p>
        
         <Button variant="secondary" size="md"  
         style={{width:"60%", alignSelf:"center"}}
         >
                Google
        </Button>
         </div>
         <div className="terms-condition">
         By continuing, you agree to Creartivity's Terms of Service and acknowledge. 
         you've read our Privacy Policy otice at collection
.
         </div>
         </div>
        <div className="final-part-login">
            <div style={{borderBottom:"1px solid rgb(222, 222, 222)",
            margin:"10px auto",
            width:"50%",
            alignItems:"center"
        }}></div>
        <div style={
            {
                "display":"flex",
                flexDirection:"col",
                justifyContent:"center",
                fontWeight:"bold",
                fontSize:"small"
            }
        }>
            <p> Not in Creartivity Yet? <span style={{cursor:"pointer"}}onClick={()=>{functionToggleSignup();funtionToggle()}}>Sign Up</span></p>
        </div>


        </div>
     </div>
        </>
    
    )
}
export default LoginDiv