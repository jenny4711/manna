import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
const Navb = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img src='./img/manna.png'/>
        </Navbar.Brand>
        <Navbar.Toggle />
        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navb

