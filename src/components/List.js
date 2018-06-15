import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class List extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch("https://cookbook-ataxztjiqa.now.sh/api/recipes")
      .then(response => response.json())
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    return (
      <div>
        <div id="new-container" />
        {this.state.recipes.map((dynamicData, i) => {
          return (
            <div className="br3 dim pa3 ma3 dark-gray ba b--black-10 mv4 w-100 dib mw6 shadow-3 pointer">
              <br />
              <span className="title underline">{dynamicData.name}</span> <br />
              <br />
              <img src={dynamicData.image} width="200px" height="auto" />
              <br />
              <br />
              {dynamicData.description} <br />
              <br />
              {dynamicData.created} <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
