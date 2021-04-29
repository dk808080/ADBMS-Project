const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());

const MONGOURI = "mongodb+srv://admin-dimpal:dimpal@cluster0.jgq2p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
});
mongoose.connection.on("connected",(req,res)=>{
    console.log("connected to mongo");
});
mongoose.connection.on("error",(err)=>{
    console.log("error while connecting ",err);
});

require("./models/patient");
require("./models/doctor");
require("./models/received");
require("./models/sent");
require("./models/requested");

app.use(express.json());
app.use(require("./routes/hospital"));
app.use(require("./routes/patient"));
app.use(require("./routes/doctor"));



const PORT = process.env.PORT || 8000;


app.listen(PORT,(req,res)=>{
    console.log("server is running on port "+PORT);
});
