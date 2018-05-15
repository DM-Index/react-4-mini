import React, { Component } from "react";
import "./App.css";

import { HashRouter } from "react-router-dom";
import Routes from "./Routes.js";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React </h1>
          </header>

          <Link to="/">
            <p>Route 1</p>
          </Link>
          <Link to="/2">
            <p>Route 2</p>
          </Link>
          <Link to="3">
            <p>Route 3</p>
          </Link>

          {Routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
