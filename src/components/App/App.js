import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Todo from "../Todo/Todo";
import About from "../About/about";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path={"/"} component={Todo} />
      </div>
    );
  }
}

export default App;
