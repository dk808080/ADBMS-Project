const mongoose = require("mongoose");

const SentHospitalSchema = new mongoose.Schema({
    pid : {
        type:String,
        required:true
    },
    name:{
        type:String
    },
    phoneno:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    weight:{
        type:String
    },
    height:{
        type:String
    },
    temprature:{
        type:String
    },
   bp:{
        type:String
    },
    cheif_complaints :{
        type:String
    },
    more_info : {
        type:String
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/xmeme-image-store/image/upload/v1619277065/nopic_rm6tcb.jpg"
    },
    reports:[{
        name:{
         type:String,
         required:true
        },
        link:{
         type:String,
         required:true
        }
    }],
    doctors:[{
        regno:{
         type:String,
         required:true
        },
        name:{
         type:String,
         required:true
        }
    }]
})

mongoose.model("SentHospital",SentHospitalSchema);
