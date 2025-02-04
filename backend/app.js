const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/empRoute")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(corse())
app.use("/employee", route)
mongoose.connect("mongodb://127.0.0.1:27017/empdatas").then((res)=>console.log("db connected"))

 









app.listen(8000, ()=>{
    console.log("Listening")
})