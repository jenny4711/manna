import React, { useState, useEffect } from "react";
import "../CSS/History.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';

const History = ({ msgs ,setShow,info}) => {
  const dispatch=useDispatch();

 
  const removeIt=(id,idx)=>{
   console.log(info.email)
    dispatch(gptAction.removeItem(id))
    dispatch(gptAction.getMsg(info.email))
   
    alert("Removed the Item!")
   


  
  }


  const copyText = () => {
    alert("Copied");
  };


    


  return (
    <div className="History">
      <h3 className={msgs?.length >0?"History_h3":"hide"}>Previous Copy</h3>
      <div className="History_ul">
        {msgs && msgs.length
          ? msgs.map((ch, idx) => (
              <div className="result-div">
                <p className="result-text" key={idx}>
                
                  <span>{ch.msg}</span>
                </p>
                <div className='btns'>
                <CopyToClipboard text={ch.msg}>
                  <button
                    onClick={() => copyText()}
                    className={msgs.length > 0 ? "" : "hide"}
                  >
                    {" "}
                    Copy
                  </button>
                </CopyToClipboard>
                <button onClick={()=>removeIt(ch.id,idx)} className='remove'>Remove</button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default History;
