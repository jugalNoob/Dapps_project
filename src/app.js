const express = require('express')

const app = express();


require('./db/coon')

const Register=require('./models/student')

const port=process.env.PORT || 9000;


app.use(express.json());


app.get('/', (req, res) => {


    res.send("hello world")

})


//post data enter line row class start

app.post("/Sign",async (req, res) => {


    try {

        const datauser=new Register({

            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            age:req.body.age
        })

        const check=await datauser.save()

        res.status(201).json({error:"successfull good"})

        console.log(check)
    } catch (error) {

        console.log(error)
        res.status(401).json({error:"successfull not_good"})
    }

})

//login row class start line


app.post("/Login",async(req, res)=>{


    try {
        const email=req.body.email;

        const password=req.body.password;
    
    
        const userEmail=await Register.findOne({email:email})
    
    
        if(userEmail.password == password){
    
            res.status(200).json({error:"successfull _ login_good"})
        }else{
    
            console.log("please enter valid login")
    
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({error:"successfull not_good_login"})
    }
 
})


//last row class line

app.listen(port, (req, res) => {


    console.log("my port number " + port);

})