import React from 'react'

import {NavLink} from "react-router-dom"

import "./style/home.css"

function Home() {
  return (

    <>
    
    <div className="start">

      <div className="nav">
      <NavLink to='/'>home</NavLink>

<br />
<br />

<NavLink to='/dapp'>dapp</NavLink>

<br />
<br />

<NavLink to='/form'>form</NavLink>
<br />
<br />
<NavLink to='/login'>login</NavLink>
      </div>
   

    </div>



<div className="second">

<div className="dapp">
<h1>the first   </h1>
<h1>decentralized</h1>
<h1>web3 app</h1>

</div>

<div className="image">

<img src="https://t3.ftcdn.net/jpg/05/14/93/54/240_F_514935453_D3w9fPqddaIndaG68BAbBKujzCOg9kS4.jpg" alt="" />

</div>
</div>


    
    
    </>

  )
}

export default Home