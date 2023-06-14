import Navb from "./Pages/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

import Log from "./Pages/Log";
import Register from "./Pages/Register";
// import History from "./Pages/History";
import { Route, Routes } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
import useLocalStorage from "./useLocalStorage";
import Gpt from "./Pages/Gpt";

function App() {
  const [token, setToken] = useLocalStorage("token", "");
  const [login, setLogin] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState([]);

  const [show, setShow] = useState(false);

  const logOut = () => {
    setLogin(false);
    setToken("");
  };

  return (
    <div className="App">
      <Navb login={login} setShow={setShow} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Gpt />} />
        <Route
          path="/:email"
          element={
            <Gpt
              setMsg={setMsg}
              setUser={setUser}
              show={show}
              setShow={setShow}
              login={login}
            />
          }
        />
        <Route path="/register" element={<Register setLogin={setLogin} />} />
        <Route
          path="/login"
          element={<Log login={login} setLogin={setLogin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
