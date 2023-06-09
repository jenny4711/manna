import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import History from "./History";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ClipLoader from "react-spinners/ClipLoader";
import Form from "./Form";
import HowTo from "../HowTo";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../redux/actions/msgAction";

const API_KEY = process.env.REACT_APP_API_KEY;

const configuration = new Configuration({
  organization: "org-M0tqNswpAzRLS33QUaLIjilO",
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

function Gpt({ show, setShow, login }) {
  let sample = {
    user_id: "",
    msg: "",
  };

  const [form, setForm] = useState({
    name: "",
    amt: "",
    item: "",
    start_date: null,
    start_time: "",
    end_date: null,
    end_time: "",
    campaign_type: "",
  });

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState(null);
  const [startDate1, setStartDate1] = useState(null);
  const [value1, setValue1] = useState(null);
  const { msgs, info, user } = useSelector((state) => state.gpt);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessage(`You are promotion post creator. 
       create a ${form.campaign_type} promotion post. 
       The business name is ${form.name}, 
       Promotion is ${form.amt} , 
       Promotion item is ${form.item}, 
       Starting date ${startDate},
       Starting time is ${value},
        Until ${startDate1},
        Ending time is ${value1}  `);
    console.log(value1, value, "dddddvalues");
    console.log(form, "form");
    setForm({
      name: "",
      amt: "",
      item: "",
      start_date: startDate,
      start_time: value,
      end_date: startDate1,
      end_time: value1,
    });
    setStartDate(null);
    setValue(null);
    setStartDate1(null);
    setValue1(null);
  };

  const handleFormChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
    console.log("hey");
  };

  const chat = async (e, message) => {
    e.preventDefault();
    console.log(e, "eeeeeeeeeeeee");
    console.log(value, value1, "times");
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
    alert("Copied");
    dispatch(gptAction.postMsg(user.id, chats[0].content));
    dispatch(gptAction.getMsg(info.email));
  };

  return (
    <>
      <div className="App-div">
        <div className="form">
          <Form
            setForm={handleFormChange}
            handleChange={handleChange}
            form={form}
            chat={chat}
            message={message}
            startDate={startDate}
            setStartDate={setStartDate}
            value={value}
            setValue={setValue}
            startDate1={startDate1}
            setStartDate1={setStartDate1}
            value1={value1}
            setValue1={setValue1}
          />
        </div>

        <br />
        <section className="result">
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
                      onClick={copyText}
                      className={chats.length > 0 ? "" : "hide"}
                    >
                      {" "}
                      Copy
                    </button>
                  </CopyToClipboard>
                </div>
              ))
            : ""}
          <div className="HowTo">
            <HowTo login={login} />
          </div>
          <div className={!show ? "hide" : "gpt_history"}>
            <History msgs={msgs} setShow={setShow} info={info} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Gpt;
