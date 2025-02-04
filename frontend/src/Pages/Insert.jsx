import React from 'react'
import {useState} from 'react'
import axios from 'axios'


const Insert = () => {
    const [input, setInput] = useState({})
    
    const changeHandler = (e) =>{
          let {name, value} = e.target
          setInput({
            ...input,
            [name]: value
          })

    }
    const submitHandler = async () =>{
           console.log(input)
           let res = await axios.post("https://localhost:8000/employee/dataemp", input)
      console.log(res.data)
    }
  return (
    <>
    
        
        
    <h1 align="center"> Insert Employee Data</h1><br /><br />

    Empno: <input type="text" name="empno" onChange={changeHandler} /> <br />
    empname: <input type="text"  name="name" onChange={changeHandler}/><br />
    Designation: <input type="text"  name="designation" onChange={changeHandler} /><br />
    Department: <input type="text" name="dept" onChange={changeHandler} /><br />
   <button onClick={submitHandler}>Insert</button>

        
        
        
       
    
    </>
  )
}

export default Insert
