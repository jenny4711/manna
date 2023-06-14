import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';
import '../CSS/Log.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../useLocalStorage";

const Register = ({setLogin}) => {
  let sample={
    email:"",
    password:""
  }
  const dispatch=useDispatch()
  const [info,setInfo]=useState(sample)
  const[item,setItem]=useState(sample)
  const {  token } = useSelector((state) => state.gpt);
  const [getToken, setGetToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  console.log(info,'register info') 
  console.log(token,'register info')

  useEffect(()=>{
    setGetToken(token);
  },[token])

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
    try{
      let res= await dispatch(gptAction.register(info))
      console.log(!getToken,'register info')
      console.log(!res,'true?')
      console.log(res,'res?')
      console.log(token,'tt')
      console.log(item)
      if(!res){
        navigate('/register')
       alert('Please Register Again')
      }else{
        await dispatch(gptAction.getMsg(item?.email));
        await dispatch(gptAction.login(item));
        setGetToken(token);
        setLogin(true);
       
        navigate(`/:item?.email `);
      }
    }catch (error){
      console.log(error)
      
      navigate("/")
    }
   
  
    
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