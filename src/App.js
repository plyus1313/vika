import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import AddRecipe from "./components/AddRecipe";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AddRecipe />
          <Route exact path="/" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
