import React , { useState } from 'react';
import { loginContext } from './Context';

const Wrapper = ({ children }) => {
    
    const [ Token , setToken ] = useState(null);

     

    const handleLogin = (credentials ) => {
        console.log(credentials);
    
             fetch("https://reqres.in/api/login" , 
        {
            method : "post",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body :  JSON.stringify(credentials)
        }
        ).then(res => res.json())
        .then(res => {
            console.log(res);
            if( !res.error){
                setToken(res);
               return alert("Login successfully");
            }
            return alert(res.error);
        }).catch((err) => {
            alert(err);
        })
         
            
    }



  return (

    <loginContext.Provider  value={{ handleLogin , Token  }}  >
        { children }
    </loginContext.Provider>


  )
}

export default Wrapper;