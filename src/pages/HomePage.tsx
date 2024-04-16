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
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    </head>
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
