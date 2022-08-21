import React,{useState} from 'react'

import {NavLink , useHistory} from  "react-router-dom"

import "./style/login.css"

function Login() {

const [email, setEmail]=useState("")
const [password, setPassword]=useState("")


const history =useHistory();

const LoginData=async(e)=>{
e.preventDefault()


const login=await fetch("Login",{

  method: "POST",
  
  headers:{

    "Content-Type": "application/json"
  },

  body: JSON.stringify({

    email,
    password
  })


})

const loginuser=await login.json();

if(loginuser.status ===422 || !loginuser){

  window.alert("enter your valid login")

}else{

  window.alert("login complete")

  history.push("/")
}

}

  return (
    <div>

<div className="form">

<h1>sign - in</h1>


<form method="POST">

<input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} id=""  placeholder="enter your email "/>
<br />
<br />
<br />
<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} id=""  placeholder="enter your password"/>
<br />
<br />
<input type="submit" value="login" onClick={LoginData} name="" id="" />
</form>

</div>
    </div>
  )
}

export default Login