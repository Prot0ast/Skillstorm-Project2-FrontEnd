import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import './Pallete.css';
import './Page.css';

export function HomePage() {
  const [count, setCount] = React.useState(0);
  const theme = useContext(ThemeContext);

  React.useEffect(
    () => {
      // Side effect logic
      console.log("Component mounted");
      return () => {
        // Cleanup logic
        console.log("Component will unmount");
      };
    },
    [
      //dependencies
    ]
  );

  return (
    <>
      <Header />
      <div className="centerText">
        <img className="centerImg" src="QuantumCom.png" alt="QuantumCom logo" />
        <br />
        <div className="background">:)</div>
        <a className="btn-btn-primary btn-lg" href="/customers">View Customers</a>
      </div>
      <Footer />
    </>
  );
}