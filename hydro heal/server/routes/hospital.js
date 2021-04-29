const express = require("express");
const router = express.Router();
const {askForDataFunc,sendDataFunc,getDataFunc,requestForDataFunc,getSentListFunc,getReceivedPatient,getReceivedListFunc,getRequestedListFunc} = require("../controllers/hospital");

router.post("/askfordata",askForDataFunc);
router.post("/requestfordata",requestForDataFunc);
router.post("/getdata",getDataFunc);
router.post("/senddata",sendDataFunc);
router.get("/sentlist",getSentListFunc);
router.get("/receivedlist",getReceivedListFunc);
router.get("/requestedlist",getRequestedListFunc);
router.get("/receivedpatient/:pid",getReceivedPatient)

module.exports = router
