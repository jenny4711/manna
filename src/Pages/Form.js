import React, { useEffect, useState } from "react";
import "../App.css";
function Form({ setForm,form }) {
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setForm(fieldName, value);
  };

  return (
    <div className="Form-form">
      <label data-domain="BusinessName">
        <input type="text" name="name" value={form.name} onChange={handleInputChange} />
      </label>
      <label data-domain="Amount">
        <input type="text" name="amt" value={form.amt} onChange={handleInputChange} />
      </label>
      <label data-domain="Item">
        <input type="text" name="item" value={form.item} onChange={handleInputChange} />
      </label>
      <label data-domain="Starting Date">
        <input type="date" name="start_date" value={form.start_date} onChange={handleInputChange} />
      </label>
      <label data-domain="Starting Time">
        <input type="time" name="start_time" value={form.start_time} onChange={handleInputChange} />
        
      </label>
      <label data-domain="Ending Date">
        <input type="date" name="end_date" value={form.end_date} onChange={handleInputChange} />
      </label>
      <label data-domain="Ending Time">
        <input type="time" name="end_time" value={form.end_time} onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default Form;
