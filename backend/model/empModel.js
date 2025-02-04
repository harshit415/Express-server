const mongoose = require("mongoose")
const schema = new mongoose.schema({
    empno: Number,
    name: String,
    designation: String,
    dept: String,
})
module.exports = mongoose.model('collection', schema)
