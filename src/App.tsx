import React from "react";
import logo from "./logo.svg";
import { ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { Devices } from "./pages/Devices";
import { DeviceDetails } from "./pages/DeviceDetails";

function App() {
  return( <ThemeContext.Provider value="dark">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Device" element={<Devices />}/>
    <Route path="/Device/:deviceId" element={<DeviceDetails/>}/>
    </Routes>
    </BrowserRouter>
  </ThemeContext.Provider>
  );
}

export default App;
