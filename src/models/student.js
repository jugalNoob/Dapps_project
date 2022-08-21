const mongoose = require('mongoose');

const userdata=new mongoose.Schema({

    name:{
        type:String,
    },

    email:{

        type:String,
    },

    password:{

        type:String,
    },



    age:{

        type:Number,
    }

})


const Register =new mongoose.model("Users" , userdata);

module.exports = Register;