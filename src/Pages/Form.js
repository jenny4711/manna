import React,{useState} from "react";
import "../App.css";



function Form({ setForm, form }) {
const [type,setType]=useState(false)
const [show,setShow]=useState(false)

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setForm(fieldName, value);
    setShow(true)
    
  };

  const makeTrue=(e)=>{
   setType(true)
   setShow(true)
  }

  return (
    <div className="Form-form">
    

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
      <label data-domain="Starting date"  className={!type?'diff':""}>
       
        <input
          type="date"
          name="start_date"
          value={form.start_date}
          className={!type?'diff':""}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
       
          
        />
     
      </label>
      <label data-domain="Starting time" className={!type?'diff':""}>
        <input
          type="time"
          name="start_time"
          value={form.start_time}
          className={!type?'diff':""}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Starting time'
        />
      </label>
      <label data-domain="Ending date" className={!type?'diff':""}>
        <input
          type="date"
          name="end_date"
          className={!type?'diff':""}
          value={form.end_date}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Ending date'
        />
      </label>
      <label data-domain="Ending time" className={!type?'diff':""}>
        <input
          type="time"
          name="end_time"
          className={!type?'diff':""}
          value={form.end_time}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
          placeholder='Ending time'
        />
      </label>

      <label data-domain="Campaign type" className={!type?'diff':""}>
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
    </div>
  );
}

export default Form;
