const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log("req is here")
    res.send('res.here')
})

module.exports = app