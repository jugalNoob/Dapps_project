import React,{useState,useEffect} from 'react'

import "./style/Dapp.css"

import Web3 from "web3"

import detectEthereumProvider from '@metamask/detect-provider'

import Abi from "./Abi.json"

//116.87

//names fee414.93

function Dapp() {


const [webApi , setWebApi]=useState({


  web3:null,
  provider:null,
})

useEffect(()=>{

  const load=async()=>{

    const provider=await detectEthereumProvider(webApi);
    
    if(provider){

      provider.request({method:"eth_requestAccounts"})

      setWebApi({
      
        web3:new Web3(provider),
        provider
      })
    }else{

      console.error("please install  metamask")
    }

  }

  load()
},[])


console.log(webApi.web3)



//web3 accounts is 

const [account , setAccount]=useState();

useEffect(()=>{

  const webaccount =async()=>{
const allaccount=await webApi.web3.eth.getAccounts()

setAccount(allaccount[0])

  }
webApi.web3 && webaccount()
})

//input user info

const [name,setName]=useState("");

const [gender,setGender]=useState("");

const [email,setEmail]=useState("");

const [names , setNames]=useState("");

const DataBase=async()=>{
  const {web3}=webApi;

  var MyContract = new web3.eth.Contract(Abi,"0xa762856Ff7E0F76c8Ca00CF8A194F240aaC01C5b")
  MyContract.methods.Enteraddress(name , gender , email , names).send({from:account}).then(console.log)



}

//last enter your friend web3 line last





//enter address for web3
const [enter , setEnter]=useState("");

const Address=async()=>{

  
  const {web3}=webApi;

  var MyContract = new web3.eth.Contract(Abi,"0xa762856Ff7E0F76c8Ca00CF8A194F240aaC01C5b")
  MyContract.methods.Hotal(enter).send({from:account}).then(console.log)
}

//last enter address for web3





//check data your all_name web3 

const Check=async () => {

  const {web3}=webApi;

  var MyContract = new web3.eth.Contract(Abi,"0xa762856Ff7E0F76c8Ca00CF8A194F240aaC01C5b")

  
  MyContract.methods.getUser().call({from:account}).then(alert)
}


//delets the account block accounts friend name;


const Delete=async()=>{

  const {web3}=webApi;

  var MyContract = new web3.eth.Contract(Abi,"0xa762856Ff7E0F76c8Ca00CF8A194F240aaC01C5b")

  
  MyContract.methods.delt().send({from:account}).then(alert("success"))

}





  return (
    <div>


<div className="web_account">

<h2>your metamask account address</h2>

<h1>{account ? account:"not coonect"}</h1>

</div>

<div className="center">




<div className="enters">

<h1>enter your  address and click the enter button</h1>

  <input type="text" name="name"  id=""  onChange={(e)=>setEnter(e.target.value)} placeholder="enter your address"/>
<br />
  <input type="submit" value="enter" onClick={Address} name="" id="" />
</div>

<div className="webForm">

<input type="text" name="name"  id=""  onChange={(e)=>setName(e.target.value)} placeholder="enter friend one"/>
<br />
<br />
<input type="text" name="name"  id=""  onChange={(e)=>setNames(e.target.value)} placeholder="enter friend two"/>
<br />
<br />
<input type="text" name="name"  id=""  onChange={(e)=>setGender(e.target.value)} placeholder="enter friend three "/>
<br />
<br />
<input type="text" name="name"  id=""  onChange={(e)=>setEmail(e.target.value)} placeholder="enter friend four"/>
<br />
<br />
<input type="submit" value="register" onClick={DataBase} name="" id="" />
</div>





<div className="button_one">
<button id="enter" onClick={Check}>Check_Friend_Name</button>


</div>


<div className="button_two">
<button id="delet" onClick={Delete}>Delete_Friend_List</button>

</div>
</div>

    </div>
  )
}

export default Dapp