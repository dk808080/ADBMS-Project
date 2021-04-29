const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    regno : {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    
    degree:{
        type:String,
        required:true
    },
    branch :{
        type:String,
        required:true
    },
   
    pic:{
        type:String,
        default:"https://res.cloudinary.com/xmeme-image-store/image/upload/v1619277065/nopic_rm6tcb.jpg"
    },
   patients:[{
        pid:{
         type:String,
         required:true
        },
        name:{
         type:String,
         required:true
        }
    }]

})

mongoose.model("Doctor",doctorSchema);