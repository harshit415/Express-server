const express = require("express")
const route = express.Router()
const controller = require("../controller/empController")
route.post("/dataemp", controller.data)


module.exports = route