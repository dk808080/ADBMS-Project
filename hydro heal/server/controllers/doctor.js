const express = require("express");
const mongoose = require("mongoose");
const Doctor = mongoose.model("Doctor");
const Patient = mongoose.model("Patient");

const addDoctorFunc = async (req, res) => {
    const { name, phoneno, email, age, gender, address, degree, branch, pic } = req.body;
    if (!name || !phoneno || !email || !age || !gender || !address || !degree || !branch) {
        return res.status(422).json({ err: "All the fields are mandatory" });
    }
    const number = await Doctor.countDocuments();
    const regno = `reg122${number}`;
    const doctor = new Doctor({
        regno,
        name,
        phoneno,
        email,
        age,
        gender,
        address,
        degree,
        branch,
        pic
    });
    doctor.save().then((result) => {
        res.json({ meme: result });
    }).catch(err => {
        console.log(err);
    });
}

const getAllDoctorFunc = (req, res) => {
    Doctor.find().then((doctors) => {
        res.json({ doctors });
    }).catch(err => {
        console.log(err);
    });
}


const doctorProfileFunc = (req, res) => {
    Doctor.find({ regno: req.params.id })
        .exec((err, doctor) => {
            if (err) {
                return res.status(422).json({ error: err });
            }
            res.json({ doctor })
        });

}

const updatePicFunc = (req, res) => {
    Doctor.findOneAndUpdate({ regno: req.body.regno }, { $set: { pic: req.body.pic } }, { new: true }, (err, result) => {
        if (err) {
            return res.status(422).json({ error: err });
        }
        res.json(result);
    })
}

const addPatientListFunc = (req, res) => {
    const regno = req.body.regno;
    const patient = {
        name: req.body.pname,
        pid: req.body.pid
    }
    Doctor.findOneAndUpdate({ regno: regno }, {
        $push: { patients: patient }
    }, {
        new: true
    })
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err });
            }
            else {
               
                const doctor = {
                        regno:result.regno,
                        name:result.name
                }
                Patient.findOneAndUpdate({ pid: patient.pid }, {
                    $addToSet: { doctors: doctor }
                }, {
                    new: true
                })
                    .exec((err, result) => {
                        if (err) {
                            return res.status(422).json({ error: err });
                        }
                        else {
                            res.json(result);
                        }
                    })
            }
        })
}
module.exports = { addDoctorFunc, getAllDoctorFunc, doctorProfileFunc, updatePicFunc, addPatientListFunc };