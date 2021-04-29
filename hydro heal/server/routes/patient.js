const express = require("express");
const router = express.Router();
const {patientProfileFunc,getAllPatientFunc,addReportFunc,addPatientFunc,updateReportFunc,updatePicFunc} = require("../controllers/patient");

router.get("/patient/:id",patientProfileFunc);
router.get("/allpatients",getAllPatientFunc);
router.post("/addpatient",addPatientFunc);
router.put("/updatepicofpatient",updatePicFunc);
router.post("/addreport",addReportFunc);
router.put("/updatereport",updateReportFunc);


module.exports = router