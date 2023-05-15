import React, { useEffect, useState } from "react";
import "../App.css";
function Form({ setForm }) {
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setForm(fieldName, value);
  };

  return (
    <div className="Form-form">
      <label data-domain="BusinessName">
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label data-domain="Amount">
        <input type="text" name="amt" onChange={handleInputChange} />
      </label>
      <label data-domain="Item">
        <input type="text" name="item" onChange={handleInputChange} />
      </label>
      <label data-domain="Starting Date">
        <input type="date" name="start_date" onChange={handleInputChange} />
      </label>
      <label data-domain="Starting Time">
        <input type="time" name="start_time" onChange={handleInputChange} />
        
      </label>
      <label data-domain="Ending Date">
        <input type="date" name="end_date" onChange={handleInputChange} />
      </label>
      <label data-domain="Ending Time">
        <input type="time" name="end_time" onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default Form;
