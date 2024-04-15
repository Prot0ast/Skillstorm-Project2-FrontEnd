import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import QuantumCom from './public/QuantumCom.png';

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
      <div>
        <img src="QuantumCom.png" alt="QuantumCom logo" />
        <br />
        <a className="btn-btn-primary btn-lg" href="/customers">View Customers</a>
      </div>
      <Footer />
    </>
  );
}
