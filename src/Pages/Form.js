import React,{useState} from "react";
import "../App.css";



function Form({ setForm, form }) {
const [type,setType]=useState(false)
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setForm(fieldName, value);
    
  };

  const makeTrue=(e)=>{
   setType(true)
  }

  return (
    <div className="Form-form">
    

      <label data-domain="Restaurant name">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </label>
      <label data-domain="Promotion amount">
        <input
          type="text"
          name="amt"
          value={form.amt}
          onChange={handleInputChange}
        />
      </label>
      <label data-domain="Promotion Item">
        <input
          type="text"
          name="item"
          value={form.item}
          onChange={handleInputChange}
        />
      </label>
      <label data-domain="Starting date">
       
        <input
          type="date"
          name="start_date"
          value={form.start_date}
          className={!type?'diff':""}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
        />
      {console.log(type)}
      </label>
      <label data-domain="Starting time">
        <input
          type="time"
          name="start_time"
          value={form.start_time}
          className={!type?'diff':""}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
        />
      </label>
      <label data-domain="Ending date">
        <input
          type="date"
          name="end_date"
          className={!type?'diff':""}
          value={form.end_date}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
        />
      </label>
      <label data-domain="Ending time">
        <input
          type="time"
          name="end_time"
          className={!type?'diff':""}
          value={form.end_time}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
        />
      </label>

      <label data-domain="Campaign type">
        <select
          
          name="campaign_type"
          className="select-type"
          value={form.campaign_type}
          onChange={handleInputChange}
          onClick={(e)=>makeTrue(e)}
        >
          <option>Facebook</option>
          <option>Twitter</option>
          <option>Instargram</option>
          
          </select>
      </label>
    </div>
  );
}

export default Form;
