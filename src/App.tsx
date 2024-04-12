import React from "react";
import { ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { CustomerDetails } from "./pages/CustomerDetails";
import { Customers } from "./pages/Customers";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<Customers />}/>
          <Route path="/customers/:customerId" element={<CustomerDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
