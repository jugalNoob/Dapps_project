import React,{useState} from 'react'

import {NavLink , useHistory} from  "react-router-dom"

import "./style/form.css"

function Form() {

  const [user,setUser]=useState({

name:"",
email:"",
password:"",

age:"",

  })


  const history=useHistory();

  const Data=(e)=>{

  
    console.log(e)
  let name=e.target.name

  let value=e.target.value

  setUser({...user,[name]:value})

  }



  const postData=async(e)=>{
e.preventDefault()
    

const {name , email , password , age}=user;


const userdata=await fetch("/Sign",{

  method: "POST",

  headers: {

    "Content-Type": "application/json"
  },


  body: JSON.stringify({

    name,
    email,
    password,
    age

  })


})


const data=await userdata.json();

if(data.status === 422 || !data){

  window.alert("invalid resigart")

  console.log("invalid")

}else{

  window.alert("complete");

  console.log("complete")

 history.push("/login")
}

}
  return (
    <div>


<div className="forms">

  <h1>signup</h1>

<form>

<input type="text" name="name" value={user.name} onChange={Data} autoComplete="off" id="" placeholder="name" />
<br />
<br />
<input type="email" name="email"   autoComplete="off" value={user.email} onChange={Data}  id="" placeholder="email" />
<br />
<br />
<input type="password" name="password" autoComplete="off" value={user.password} onChange={Data} id=""  placeholder="password" />
<br />
<br />

<input type="text" name="age" value={user.age}  autoComplete="off" onChange={Data} id=""  placeholder="age" />
<br />
<br />
<input type="submit"  value="register"    onClick={postData} id="" />
</form>


        <p> already have an account ? <NavLink to = "/login"> login </NavLink></p >
</div>
    </div>
  )
}

export default Form