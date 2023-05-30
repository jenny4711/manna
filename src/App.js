import Navb from "./Pages/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

import Log from "./Pages/Log";
import Register from "./Pages/Register";
import History from "./Pages/History";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useLocalStorage from "./useLocalStorage";
import Gpt from "./Pages/Gpt";

// about history
// make post api in redux (post received msg from gpt)
// make function to put user_id to post history
// connect gpt with post history redux function

function App() {
  const [token, setToken] = useLocalStorage("token", "");
  const [login, setLogin] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState([]);
  
  const [show,setShow]=useState(false);

  const logOut = () => {
    setLogin(false);
    setToken("");
  };

  return (
    <div className="App">
      <Navb  login={login} show={show} setShow={setShow} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Gpt />} />
        <Route
          path="/:email"
          element={<Gpt setMsg={setMsg} setUser={setUser} show={show} setShow={setShow} login={login} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Log login={login} setLogin={setLogin} />}
        />
        {/* <Route path='/history/:email' element={<History user={user} setUser={setUser}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
