var cloudinary = require('cloudinary').v2
const express = require('express')
const path = require('path')
const app = express();
const bodyPaser = require('body-parser')

require('dotenv').config()
app.use(bodyPaser.json())



app.use(express.static('dist'))

app.get('/',(req,res)=>{
    console.log("req is here")
    //cloudinary.uploader.upload("./assets/cert-model-1.png",{width: 500, height: 500}, function(error, result) { res.send(result.secure_url) });
})
app.post('/create',(req,res)=>{
    console.log(req.body)
})

module.exports = app