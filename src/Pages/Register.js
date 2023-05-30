import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';
import '../CSS/Log.css'

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
        <input name="email" type="text" value={info.email} onChange={handleChange} placeholder='Email'/>
        <input name="password" type="text" value={info.password} onChange={handleChange} placeholder='Password' />
  <button className='registerBtn'>Submit</button>
      </form>
    </div>
  )
}

export default Register