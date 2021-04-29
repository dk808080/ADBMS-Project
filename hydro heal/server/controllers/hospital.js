const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const SentHospital = mongoose.model("SentHospital");
const ReceivedHospital = mongoose.model("ReceivedHospital");
const RequestedHospital = mongoose.model("RequestedHospital");


const askForDataFunc = (req,res) => {
  const {pid,requesteddata} = req.body;
  const askeddata = {
    pid,
    requesteddata
  }
    axios.post(`http://localhost:8000/requestfordata`,askeddata)
    .then(result =>{
      res.json({message:result.data.message});
    })
    .catch(err=>console.log(err));
}

const sendDataFunc = (req,res) => {
    const {pid,name,phoneno,email,age,gender,address,weight,height,temprature,bp,cheif_complaints,more_info,pic,reports,doctors} = req.body;
    const arr = [];
    for(let k in reports)
    {
        const obj = {
            name : k.name,
            link : k.link
        }
        arr.push(obj);
    }
    const patientdata ={
      pid,
      name,
      phoneno,
      email,
      age,
      gender,
      address,
      weight,
      height,
      temprature,
      bp,
      cheif_complaints,
      more_info,
      pic,
      reports:arr,
      doctors
    }
    axios.post(`http://localhost:8000/getdata`,patientdata)
  .then(result =>{
    const newsentdata = new SentHospital({
      pid,
      name,
      phoneno,
      email,
      age,
      gender,
      address,
      weight,
      height,
      temprature,
      bp,
      cheif_complaints,
      more_info,
      pic,
      reports:arr,
      doctors
    });
    newsentdata.save().then((result)=>{
      RequestedHospital.findOneAndDelete({pid:result.pid}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Done");
        }
    });
        res.json({patient:result});
    }).catch(err=>{
        console.log(err);
    });
  })
  .catch(err=>console.log(err));
}

const getDataFunc = (req,res) => {
  const {pid,name,phoneno,email,age,gender,address,weight,height,temprature,bp,cheif_complaints,more_info,pic,reports,doctors} = req.body;
  
  const arr = [];
            for(let k in reports)
            {
                const obj = {
                    name : k.name,
                    link : k.link
                }
                arr.push(obj);
            }
  const newreceiveddata = new ReceivedHospital({
    pid,
    name,
    phoneno,
    email,
    age,
    gender,
    address,
    weight,
    height,
    temprature,
    bp,
    cheif_complaints,
    more_info,
    pic,
    reports:arr,
    doctors
  });
  newreceiveddata.save().then((result)=>{
      res.json({patient:result});
  }).catch(err=>{
      console.log(err);
  });
}

const requestForDataFunc = (req,res) => {
  const {pid,requesteddata} = req.body;
  const newrequesteddata = new RequestedHospital({
   pid,
   requesteddata
  });
  newrequesteddata.save().then((result)=>{
    res.json({message:"request has been sent successfully"});
}).catch(err=>{
    console.log(err);
});
}


const getSentListFunc = (req,res) =>{
  SentHospital.find().then((patients)=>{
      res.json({patients});
  }).catch(err=>{
      console.log(err);
  });
}
const getReceivedListFunc = (req,res) =>{
  ReceivedHospital.find().then((patients)=>{
      res.json({patients});
  }).catch(err=>{
      console.log(err);
  });
}

const getRequestedListFunc = (req,res) =>{
  RequestedHospital.find().then((patients)=>{
      res.json({patients});
  }).catch(err=>{
      console.log(err);
  });
}

const getReceivedPatient = (req,res) => {
  ReceivedHospital.findOne({pid:req.params.pid})
  .exec((err,patient)=>{
      if(err)
      {
          return res.status(422).json({error:err});
      }
      res.json({patient})
  });

}

module.exports = {askForDataFunc,sendDataFunc,getDataFunc,requestForDataFunc,getRequestedListFunc,getReceivedPatient,getReceivedListFunc,getSentListFunc};
