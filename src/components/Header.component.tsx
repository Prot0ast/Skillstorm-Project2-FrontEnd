import React from "react";

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
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>sample text from header</div>
          </nav>
        </header>
      </div>
    );
  }
}