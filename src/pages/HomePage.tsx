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
      <body>
        <br />
        <h4 className="centerText">New User? Register Here!</h4>
        <form action="https://localhost:5001/api" method="post">
            <div className="container">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name here..." required/>
            </div>
            <div className="container">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name here..." required/>
            </div>
            <div className="container">
              <label htmlFor="userName">Username: </label>
              <input type="text" className="form-control" id="userName" name="userName" placeholder="Enter Username here..." required/>
            </div>
            <div className="container">
              <label htmlFor="password">Password: </label>
              <h6>Must be 10 characters long</h6>
              <h6></h6>
              <input type="text" className="form-control" id="password" name="password" placeholder="Enter Password here..." pattern=".{10,}" required/>
            </div>
            <div className="container">
              <label htmlFor="email">Email: </label>
              <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email here..." required/>
            </div>
            <div className="container">
              <label htmlFor="phoneNumber">Phone Number: </label>
              <h6>Format: ###-###-####</h6>
              <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number here..." pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            </div>
            <div className="centerText">
              <br />
              <button className="btn btn-success">Submit</button>
            </div>
        </form>

      </body>
      <Footer />
    </>
  );
}
