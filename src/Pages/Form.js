import  React,{useState} from "react";
import "../CSS/Form.css";

// import 'configurable-date-input-polyfill';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'react-ios-time-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Form({ setForm, form,handleChange,chat,message,startDate,setStartDate ,value,setValue,startDate1,setStartDate1 ,value1,setValue1}) {
const [type,setType]=useState(false)
const [show,setShow]=useState(false)


  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setForm(fieldName, value);
    setShow(true)
    console.log(form)
    
  };

  const makeTrue=(e)=>{
   setType(true)
   setShow(true)
  }
  const onChange = (timeValue) => {
    setValue(timeValue);
    setShow(true)
 }
 const onChange1 = (timeValue) => {
  setValue1(timeValue);
  setShow(true)
}

  return (
    <>
    <form className="Form-form" onSubmit={(e) => chat(e, message)}>
    <h1>Campaign generator</h1>
      <label data-domain="Business name" className={!show?'diff':""} >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          
        />
      </label>
      <label data-domain="Promotion amount" className={!show?'diff':""}>
        <input
          type="text"
          name="amt"
          value={form.amt}
          onChange={handleInputChange}
         
        />
      </label>
      <label data-domain="Promotion Item" className={!show?'diff':""}>
        <input
          type="text"
          name="item"
          value={form.item}
          onChange={handleInputChange}
         
        />
      </label>
      <label data-domain="Starting date"  className={!show?'diff':""}>
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}  
        name="start_date"
        className='after'
        onClick={(e)=>makeTrue(e)}
       
    />  
      
        {/* <input
          type="date"
          name="start_date"
          value={form.start_date}
          className={!show?'after':""}
          autoComplete={false}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
       
          
        /> */}
     
      </label>
      <label data-domain="Starting time" className={!show?'diff':""}>
     
        {/* <input
          type="time"
          name="start_time"
          value={form.start_time}
          className={!show?'after':""}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Starting time'
        /> */}
      
      <TimePicker onChange={onChange} value={value}  className='after' />

      </label>
      <label data-domain="Ending date" className={!show?'diff':""}>
      <DatePicker 
        selected={startDate1} 
        onChange={(date) => setStartDate1(date)}  
        name="end_date"
        className='after'
    /> 
        {/* <input
          type="date"
          name="end_date"
          className={!show?'after':""}
          value={form.end_date}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Ending date'
        /> */}
      </label>
      <label data-domain="Ending time" className={!show?'diff':""}>
      <TimePicker onChange1={onChange1} value={value1}  className='after' />
        {/* <input
          type="time"
          name="end_time"
          className={!show?'after':""}
          value={form.end_time}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Ending time'
        /> */}
      </label>

      <label data-domain="Campaign type" className={!show?'diff':""}>
        <select
          
          name="campaign_type"
          className="select-type"
          value={form.campaign_type}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Campaign type'
        >
          <option></option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Instargram</option>
          
          </select>
      </label>
      <button onClick={handleChange}>Generate</button>
      </form>
    </>
  );
}

export default Form;