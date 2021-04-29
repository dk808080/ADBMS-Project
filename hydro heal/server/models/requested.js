const mongoose = require("mongoose");

const RequestedHospitalSchema = new mongoose.Schema({
    pid : {
        type:String,
        required:true
    },
    requesteddata:[String]
})

mongoose.model("RequestedHospital",RequestedHospitalSchema);
