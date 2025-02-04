const model = require("../model/empModel")
const data = async (req, res) =>{
    let {empno, name, designation, dept} = req.body
    let employee = await model.create({
        empno: empno,
        name: name,
        designation: designation,
        dept: dept
    })
    res.send(employee)
}
module.exports = {
    data
}