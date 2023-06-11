import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';
import useLocalStorage from '../useLocalStorage';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../CSS/Log.css'

const Log = ({login,setLogin}) => {
  let sample={
    email:null,
    password:null,
  }
  const dispatch= useDispatch()
  const [data,setData]=useState(sample);
  const [item,setItem]=useState(sample);
  const [getToken,setGetToken]=useLocalStorage("token","")
  const {info,token}=useSelector((state)=>state.gpt)
const navigate=useNavigate()


  const handleChange = async (e)=>{
    const {name,value}=e.target;
    setItem({...item,[e.target.name]:e.target.value})
    setData((data)=>({
      ...data,
      [name]:value,
    }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setItem(sample);
    dispatch(gptAction.login(data))
    dispatch(gptAction.getMsg(data.email))
    setGetToken(token)
   
    if(token !==null){
      navigate(`/:${data.email}`)
      setLogin(true)
    }else{
      navigate('/')
    }
    
  }


 
  return (
    <div className='Log'>
      <h1>Login</h1>
      <form className='login' onSubmit={handleSubmit}>
      {/* <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
     
      >
        <Form.Control 
        type="email" 
        placeholder="name@example.com"   
        name="email"
        value={data.email}
        onChange={handleChange} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control 
        type="password" 
        placeholder="Password" 
        name="password"
        value={data.password}
        onChange={handleChange}
        />
      </FloatingLabel> */}
   <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          name="email"
          value={data.email}
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
          value={data.password}
          onChange={handleChange}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>


      <button className='loginBtn'>Submit</button>
      </form>


       {/* <form className='login' onSubmit={handleSubmit}>
        <input name="email" type="text" value={data.email} onChange={handleChange} placeholder='Email'/>
        <input name="password" type="text" value={data.password} onChange={handleChange} placeholder='Password' />
       <button className='loginBtn'>Submit</button>
      </form> */}
    </div>
  )
}

export default Log