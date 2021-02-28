var cloudinary = require('cloudinary').v2
const express = require('express')
const path = require('path')
const app = express();
const bodyPaser = require('body-parser')

require('dotenv').config()
app.use(bodyPaser.json())


cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key:process.env.api_key, 
    api_secret: process.env.api_secret
  });

app.use(express.static('public'))

app.get('/',(req,res)=>{
    console.log("req is here")
    //cloudinary.uploader.upload("./assets/cert-model-1.png",{width: 500, height: 500}, function(error, result) { res.send(result.secure_url) });
})
app.post('/create',(req,res)=>{
    console.log(req.body)
    res.json({res:"wararararay"})
    //cloudinary.uploader.upload("./assets/cert-model-1.png",{width: 500, height: 500}, function(error, result) { res.send(result.secure_url) });
})

module.exports = app