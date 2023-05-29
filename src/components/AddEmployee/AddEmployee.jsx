import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {v1 as uuid} from "uuid"; 
import Employee from '../../Employee';
import { Link, useNavigate } from 'react-router-dom';
// import './AddEmployee.css';
const AddEmployee = () => {
    
const[name,setName] = useState('');
const[age,setAge] = useState('');
const[City,setCity] = useState('');
// const[name,setName] = useState('');
let history = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    const uniId= uuid();
    let uuids=uniId.slice(0,8);
    Employee.push({id:uuids,Name:name,Age:age})
    history('/employe')
}

  return (<>
<Form>
    <Form.Group>
    <Form.Control type='text' placeholder='Enter the name' required onChange={(e)=> setName(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the age' required onChange={(e)=> setAge(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the city' required onChange={(e)=> setCity(e.target.value)}></Form.Control>
    </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit' >Submit</Button>
</Form>

    {/* <div className='edit'>
      <h1>Edit Page</h1>
      <form>
  <div className="form-group">
    <label for="editid">ID</label>
    <input type="text" className="form-control" id="editid" aria-describedby="emailHelp" placeholder="Enter ID"/><br/>
    <label for="editname">Name</label>
    <input type="text" className="form-control" id="editname" aria-describedby="emailHelp" placeholder="Enter name"/><br/>
    <label for="editname">Age</label>
    <input type="text" className="form-control" id="editname" aria-describedby="emailHelp" placeholder="Enter Age"/><br/>
  </div><br/>
  <input className="btn btn-primary" type="submit" value="Submit"></input>
  </form>
    </div> */}
    </>
  )
}

export default AddEmployee;
