import React , { useState } from 'react';
import { loginContext } from './Context';

const Wrapper = ({ children }) => {
    
    const [ Token , setToken ] = useState(null);

     

    const handleLogin = async (credentials ) => {
        console.log(credentials);
        try {
            const response = await fetch("https://reqres.in/api/login" , 
        {
            method : "post",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body :  JSON.stringify(credentials)
        }
        )
        if(response.status === 200 ){
            setToken( response.json());
           return alert("Login successfully");
        }    
        } catch (error) {
            console.log(error.message);
            return error
        }
    }



  return (

    <loginContext.Provider  value={{ handleLogin , Token  }}  >
        { children }
    </loginContext.Provider>


  )
}

export default Wrapper;