import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;