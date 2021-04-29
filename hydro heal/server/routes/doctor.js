const express = require("express");
const router = express.Router();
const {doctorProfileFunc,getAllDoctorFunc,addDoctorFunc,updatePicFunc,addPatientListFunc} = require("../controllers/doctor");

router.get("/doctor/:id",doctorProfileFunc);
router.get("/alldoctors",getAllDoctorFunc);
router.post("/adddoctor",addDoctorFunc);
router.put("/updatepicofdoctor",updatePicFunc);
router.post("/addpatientinlist",addPatientListFunc);

module.exports = router