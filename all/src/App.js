import React from 'react'
import {Route} from "react-router-dom";
import Dapp from "./enter/Dapp"

import Home from "./enter/Home"

import Form from "./enter/Form"

import Login from "./enter/Login"

function App() {
  return (
    <div>

<Route exact path="/">


  <Home/>
</Route>


<Route exact path="/dapp">


  <Dapp/>
</Route>


<Route path="/form">


  <Form/>
</Route>


<Route path="/login">


  <Login/>
</Route>
    </div>
  )
}

export default App