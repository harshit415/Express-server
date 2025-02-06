const mongoose = require("mongoose")
const schema = new mongoose.schema({
    empno: string,
    name: String,
    designation: String,
    dept: String,
})
module.exports = mongoose.model('collection', schema)
