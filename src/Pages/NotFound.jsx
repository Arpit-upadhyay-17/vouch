import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const [ second , setSecond ] = useState(5)
    const navigate = useNavigate();

    useEffect(() => {

        if(second === 0){
            navigate(-1)
            // window.location.href = "/";
        }
        
        const timer = setInterval(() => {
            
            console.log("run" , second)
            setSecond(second-1)
            
        } ,1000)
        console.log("run");
        return () => {
            clearInterval(timer)
        }
    } ,[second] )
  return (
    <div className='not-found' >
        <div>
            <p>Page not found</p>
            <span>Go back to <u>login </u> page or you will redirected to login page in {second} </span>
        </div>
    </div>
  )
}

export default NotFound