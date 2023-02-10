import React from "react";
import axios from 'axios'


const Test=(props)=>{
   let test=()=>{
       axios.post('http://localhost:4444/test',{
           fullName:"David",
           email:"David@gmail.com"
       }).then(res=>console.log(res))
   }
    let testReg=()=>{
        axios.post('http://localhost:4444/auth/register',{
            email:"David8@gmail.com",
            password:"123123",
            fullName:"David",
            avatarUrl:"https://images.prom.ua/2985011827_w500_h500_vafelna-kartinka-na.jpg"
        }).then(res=>console.log(res))
    }

    return <div >
      <button onClick={testReg} >test</button>
    </div>
}

export default Test;