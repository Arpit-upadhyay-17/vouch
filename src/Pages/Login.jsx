import { useContext, useEffect, useState } from "react";
import "../style/Login.css";
import username from "../assets/username.svg";
import password from "../assets/password.svg";
import {loginContext} from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const {  handleLogin , Token ,  }= useContext(loginContext);
    const navigate = useNavigate();
    const [ credentials , setCredentials ] = useState({
        email : "",
        password :""
    })

    const handleChange = (e) => {
        const { name , value } = e.target;
        return setCredentials({...credentials , [name] : value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       return  handleLogin(credentials)
    }
    
    useEffect(() => {
        document.title = "Login page"
    })

    useEffect(() => {
        if(Token !== null ){
          return  navigate("/user/view");
        }
    } , [Token] )


    return (

    <div className="login-page">
        <div className="login-details">
            <div className="login-form">
                <center> 
                    <h3>Welcome</h3> <br />
                    <span>Enter your username and password</span>
                
                <br />
                <form  onSubmit={handleSubmit} autoComplete="off" >
                    <div className="input-div username">
                        <label htmlFor="username"  style={{ display : "flex" }} ><img src={username}  alt="icon" /></label>
                        <input type="email" required name="email" value={credentials.email}  onChange={handleChange} id="username" placeholder="Username" />
                    </div>
                    <div className="input-div password">
                        <label htmlFor="password" required style={{ display : "flex" }} ><img src={password}  alt="icon" /></label>
                        <input type="password" name="password" value={credentials.password}  onChange={handleChange} id="password" placeholder="Password" />
                    </div>
                    <div className="input-div submit">
                        <input type="submit" value="login" />
                    </div>

                    <p>Forget Password?</p>
                </form>
                </center>
            </div>
            <center className="terms">
               <div>
                    <span>Terms of use</span> &nbsp;&nbsp;&nbsp;<span>Privacy Policy</span> 
                        <br />
                        <span>© Punctualiti 2022. All rights reserved</span>
               </div>
            </center>
        </div>
        <div className="some-info">
            
                 <div className="box"></div>
                <div className="box-1" >
                 <p>360° Solution for Asset Management  </p> <br />
                 <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim molestiae debitis earum asperiores velit maiores laudantium, error nulla in unde.</span>
                 
                 </div>
                
                
        </div>
    </div>

  )
}

export default Login