const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.get("/",(req,res)=>{
    console.log("APPP IS STARTEDDD");
    res.json("CHAL GAYA BHAI!!")
})

app.listen(port,(req,res)=>{
    console.log("APPP IS STARTEDDD");
})