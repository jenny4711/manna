import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

const Navb = ({login,show,setShow,logOut}) => {
  const {msgs,info,user}=useSelector((state)=>state.gpt)
  console.log(info,'infonav')
  console.log(user,'usernav')
console.log(login)
  const logOutKey = (e)=>{
    if(e.target.className === "logout"){
      logOut()
      console.log(e.target)
    }
  }

  const showHistory=(e)=>{
    e.preventDefault()
    setShow((s)=>(s ===true?false:true))
    console.log(show)
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/:email">
          <img src='./img/manna.png'/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
            <Nav.Link href="/register" className={!login?'':'hide'}>Register</Nav.Link>
            <Nav.Link onClick={(e)=>logOutKey(e)} className={login?"logout":"login"} href="/login">{login?"LogOut":"LogIn"}</Nav.Link>
            <Nav.Link onClick={(e)=>showHistory(e)} className={!login?'hide':''}  href="#history">History</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default Navb

