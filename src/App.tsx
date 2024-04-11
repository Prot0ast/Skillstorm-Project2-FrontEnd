import React from "react";
import logo from "./logo.svg";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  return <ThemeContext.Provider value="dark"></ThemeContext.Provider>;
}

export default App;
