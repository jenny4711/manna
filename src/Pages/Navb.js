import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../redux/actions/msgAction";
import { useNavigate } from "react-router-dom";

const Navb = ({ login, setShow, logOut }) => {
  const { info, user } = useSelector((state) => state.gpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutKey = (e) => {
    if (e.target.className === "logout") {
      logOut();
    }
  };
  const forLogin = (e) => {
    e.preventDefault();
    if (login) {
      dispatch(gptAction.login(info));
    } else {
      navigate("/");
    }
  };

  const showHistory = (e) => {
    e.preventDefault();
    setShow((s) => (s === true ? false : true));
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" onClick={(e) => forLogin(e)}>
          <img src="./img/manna.png" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end right">
          <Nav.Link href="/register" className={!login ? "" : "hide"}>
            Register
          </Nav.Link>
          <Nav.Link
            onClick={(e) => logOutKey(e)}
            className={login ? "logout" : "login"}
            href="/login"
          >
            {login ? "LogOut" : "LogIn"}
          </Nav.Link>
          <Nav.Link
            onClick={(e) => showHistory(e)}
            className={!login ? "hide" : ""}
            href="#history"
          >
            History
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navb;
