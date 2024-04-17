import React from "react";
import { ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { CustomerDetails } from "./pages/CustomerDetails";
import { Customers } from "./pages/Customers";
import { BillBreakdown } from "./pages/BillBreakdown";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Customers" element={<Customers />}/>
          <Route path="/Customers/:customerId" element={<CustomerDetails />} />
          <Route path="/Customer/:bill" element={<BillBreakdown/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
