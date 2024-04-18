import React from "react";
import './Component.css'

export class Header extends React.Component {
  componentDidMount(): void {
    // Normally used to make API calls or fetch data
  }

  componentWillUnmount(): void {
    // Clean up code: remove event listeners, cancel network requests, etc.
  }

  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
          </head>
        <header>
            <div>
            <img className="centerImg" src="QuantumCom.png" alt="QuantumCom logo" />
            <div className="night night_text">:)</div>
            <br />
            </div>
        </header>
      </div>
    );
  }
}
