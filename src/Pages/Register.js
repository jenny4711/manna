import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';
import '../CSS/Log.css'
import Form from 'react-bootstrap/Form';

const Register = () => {
  let sample={
    email:"",
    password:""
  }
  const dispatch=useDispatch()
  const [info,setInfo]=useState(sample)
  const[item,setItem]=useState(sample)

  const handleChange = async (e)=>{
    const {name,value}=e.target;
    setItem({...item,[e.target.name]:e.target.value});
    setInfo((info)=>({
      ...info,
      [name]:value,
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setInfo(sample);
    dispatch(gptAction.register(info))
  }



  return (
    <div className='Register'>
      <h1>Register</h1>
      <form className='register' onSubmit={handleSubmit}>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          name="password"
          value={info.password}
          onChange={handleChange}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
        {/* <input name="email" type="text" value={info.email}  onChange={handleChange} placeholder='Email'/>
        <input name="password" type="text" value={info.password}  onChange={handleChange} placeholder='Password' /> */}
        <button className='registerBtn'>Submit</button>
      </form>
    </div>
  )
}

export default Register