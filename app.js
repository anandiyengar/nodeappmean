const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userAuth = require("./Routers/user");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("",userAuth);

app.listen(port,(req,res)=>{
    console.log("APP IS STARTED");
})