import {React, useRef} from "react";
import Form from 'react-bootstrap/Form';
import "../../styles/frontPage/signup.css"
import { Button } from "react-bootstrap";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router";

function SignupDiv({funtionToggleSignup, functionToggleLogin}){
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
            alert("signup is successful")
        }else{
            alert("signup is failed")
        }
    }


    return(
      <>
      <div className="main-signup">
        <div
        style={{
            display:"flex",
             flexDirection:"column",
             justifyContent:"end",
             alignItems:"end"
        }}
        >
            <Button onClick={() => {
        console.log("Button clicked!");
        funtionToggleSignup(); // Ensure this is being called
      }}>
               <ClearIcon></ClearIcon>
            </Button>

        </div>
        <div>
            <h2 style={{textAlign:"center"}}>Welcome to Creartivity</h2>
        </div>
      <div className="signup">
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
            <Form.Control ref = {emailRef} type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword"  style={{width:"60%"}}>
                <Form.Label>
                Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" ref = {passWordRef} />
            </Form.Group>
            <Button variant="primary" size="lg"  style={{width:"60%"}} onClick={handleSubmit}>
                Continue
            </Button>
         </Form>
         <p id = "or"> OR </p>
        
         <Button variant="secondary" size="md"  style={{width:"60%", alignSelf:"center"}}>
                Google
        </Button>
         </div>
         <div className="terms-condition">
         By continuing, you agree to Creartivity's Terms of Service and acknowledge. 
         you've read our Privacy Policy otice at collection
.
         </div>
         </div>
        <div className="final-part-Signup">
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
            <p> Already in Creartivity Yet? <span style={{cursor: "pointer"}}onClick={() => {
        console.log("Button clicked!");
        functionToggleLogin()
        funtionToggleSignup()
        }}>Login</span></p>
        </div>


        </div>
     </div>
        </>
    
    )
}
export default SignupDiv