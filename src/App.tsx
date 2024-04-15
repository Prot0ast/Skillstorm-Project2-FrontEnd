import React from "react";
import logo from "./logo.svg";
import { ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { Devices } from "./pages/Devices";
import { DeviceDetails } from "./pages/DeviceDetails";
import { CustomerPlans } from "./pages/CustomerPlan";

function App() {
  return( <ThemeContext.Provider value="dark">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Device" element={<Devices />}/>
    <Route path="/Device/:deviceId" element={<DeviceDetails/>}/>
    <Route path="/customerPlan" element={<CustomerPlans/>}/>
    </Routes>
    </BrowserRouter>
  </ThemeContext.Provider>
  );
}

export default App;
