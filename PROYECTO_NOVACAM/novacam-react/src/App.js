import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Academy from "./pages/Academy";
import Community from "./pages/Community";
import Workplans from "./pages/Workplans";
import Income from "./pages/Income";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Academy" element={<Academy />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Workplans" element={<Workplans />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;