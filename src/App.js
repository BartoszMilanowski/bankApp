import React from "react";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import { Login } from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
