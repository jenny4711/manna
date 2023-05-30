
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import History from './History';
import { CopyToClipboard } from "react-copy-to-clipboard";
import ClipLoader from "react-spinners/ClipLoader";
import Form from './Form';
import HowTo from '../HowTo';
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from '../redux/actions/msgAction';
import { useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY)
const configuration = new Configuration({
  organization:"org-M0tqNswpAzRLS33QUaLIjilO",
  apiKey:API_KEY,
});
const openai = new OpenAIApi(configuration);

function Gpt({show,setShow,login}) {
  let sample={
    user_id:"",
    msg:""
  }
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [form, setForm] = useState({});
  const {msgs,info,user}=useSelector((state)=>state.gpt)
  const [getInfo,setGetInfo]=useState(null)
  const [item,setItem]=useState(sample)
  const dispatch=useDispatch()
 

 


  const handleChange = () => {
    setMessage(`You are promotion post creator. 
       create a 'Facebook' promotion post. 
       The business name is ${form.name}, 
       Promotion is ${form.amt} , 
       Promotion item is ${form.item}, 
       Starting date ${form.start_date},
       Starting time is ${form.start_time},
        Until ${form.end_date},
         ${form.end_time}  `);
         
  };

  const handleFormChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));

  };

  const chat = async (e, message) => {
    e.preventDefault();
    setIsTyping(true);
    let msgs = chats;
    setMessage({ role: "user", content: message });
    setChats(msgs);


   
   
    setMessage("");
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: message,
          },
          ...chats,
        ],
      })
      .then((result) => {
        msgs.push(result.data.choices[0].message);
        setChats(msgs);
       
        
        setIsTyping(false);
      })
      .catch((error) => console.log(error));
  };
  
  const copyText = () => {
   
  alert("Copied")
   dispatch(gptAction.postMsg(user.id,chats[0].content))
   dispatch(gptAction.getMsg(info.email))
  
   
  };

 
 
  return (
    <>
     
      <div className="App-div">
        <section className="result">
          <div className='HowTo'>
          <HowTo login={login}/>
          </div>
             
          {isTyping ? (
            <div className="typing">
              <ClipLoader
                color="gray"
                loading={isTyping}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            ""
          )}
          {chats && chats.length
            ? chats.map((ch, idx) => (
                <div className="result-div">
                  <p className="result-text" key={idx}>
                    <span>{ch.content}</span>
                  </p>
                  <CopyToClipboard text={ch.content}>
                    <button
                      onClick={() => copyText()}
                      className={chats.length > 0 ? "" : "hide"}
                    >
                      {" "}
                      Copy
                    </button>
                  </CopyToClipboard>
                </div>
                
              ))
            : ""}
            <div className={!show?'hide':'gpt_history'}>
              <History msgs={msgs} setShow={setShow} info={info}/>
            </div>
        </section>

        <form className="form" onSubmit={(e) => chat(e, message)}>
          <h1>Campaign generator</h1>
          <Form setForm={handleFormChange} />
          <button onClick={handleChange}>Generate</button>
        </form>
      </div>
    </>
  );
}

export default Gpt;
