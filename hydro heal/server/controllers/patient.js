const express = require("express");
const mongoose = require("mongoose");
const Patient = mongoose.model("Patient");

const addPatientFunc = async(req,res)=>{
    const {name,phoneno,email,age,gender,address,weight,height,temprature,bp,cheif_complaints,more_info,pic} = req.body;
    if(!name|| !phoneno || !email || !age || !gender || !address || !weight || !height || !temprature ||!bp ||!cheif_complaints ||!more_info)
    {
        return res.status(422).json({err:"All the fields are mandatory"});
    }
    const number = await Patient.countDocuments();
    const pid = `ps122${number}`;
    const patient = new Patient({
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
        pic
    });
    patient.save().then((result)=>{
        res.json({patient:result});
    }).catch(err=>{
        console.log(err);
    });
}

const getAllPatientFunc = (req,res) =>{
    Patient.find().then((patients)=>{
        res.json({patients});
    }).catch(err=>{
        console.log(err);
    });
}


const patientProfileFunc = (req,res) => {
        Patient.find({pid:req.params.id})
        .exec((err,patient)=>{
            if(err)
            {
                return res.status(422).json({error:err});
            }
            res.json({patient})
        });
   
}

const updatePicFunc = (req,res) =>{
    Patient.findOneAndUpdate({pid:req.body.pid},{$set:{pic:req.body.pic}},{new:true},(err,result)=>{
        if(err)
        {
            return res.status(422).json({error:err});
        }
        res.json(result);
    })
}

const updateReportFunc = (req,res) =>{
    const {name,pid,link} = req.body;
    Patient.findOneAndUpdate(pid)
    .exec((err,result)=>{
        if(err)
        {
            return res.status(422).json({error:err});
        }
        let n = result.reports.length;
        for(let i=0;i<n;i++)
        {
            if(result.reports[i].name===name)
            {
                result.reports[i].link = link;
            }
        }
        Patient.findOneAndUpdate({pid:result.pid},{$set:{reports:result.reports}},{new:true},(err,result)=>{
            if(err)
            {
                console.log(err);
            }
            res.json({message:"done successfully"})
        })
      
    });

}


const addReportFunc = (req,res) => {
  
    const pid = req.body.pid;
        const report = {
            name:req.body.name,
            link:req.body.link,
        }
        Patient.findOneAndUpdate({pid:pid},{
            $push:{reports:report}
        },{
            new:true
        })
        .exec((err,result)=>{
            if(err)
            {
                return res.status(422).json({error:err});
            }
            else{
                res.json(result);
            }
        })
}
module.exports = {addPatientFunc,getAllPatientFunc,patientProfileFunc,addReportFunc,updatePicFunc,updateReportFunc};