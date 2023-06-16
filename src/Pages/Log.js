import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../redux/actions/msgAction";
import useLocalStorage from "../useLocalStorage";

import Form from "react-bootstrap/Form";
import "../CSS/Log.css";

const Log = ({ login, setLogin }) => {
  let sample = {
    email: null,
    password: null,
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(sample);
  const [item, setItem] = useState(sample);
  const [getToken, setGetToken] = useLocalStorage("token", "");
  const { info, token, err } = useSelector((state) => state.gpt);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [e.target.name]: e.target.value });
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setItem(sample);

    try {
      let res = await dispatch(gptAction.login(data));
      if (res?.response?.status === 500) {
        alert("Try again!");
        return navigate("/login");
      } else {
        await dispatch(gptAction.getMsg(data.email));
        setGetToken(token);
        setLogin(true);
        return navigate(`/${data.email}`);
      }
    } catch (error) {
      console.log(error);
      alert(error?.data.error);
      return navigate("/login");
    }
  };

  return (
    <div className="Log">
      <h1>Login</h1>
      <form className="login" onSubmit={handleSubmit}>
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

        <button className="loginBtn">Submit</button>
      </form>
    </div>
  );
};

export default Log;
