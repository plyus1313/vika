import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
      // <Link to={`/${this.state.recipes}`}>
        <div>
          <div id="new-container"></div>
          {this.state.recipes.map((dynamicData, i) => {
            return (
              <div className="br3 dim pa3 ma3 ba b--black-10 mv4 w-70 dib mw6 shadow-3 pointer">
                <br />
                <span className="title underline">{dynamicData.name}</span>{" "}
                <br />
                <br />
                <img src={dynamicData.image} width="200px" height="auto" />
                <br />
                <br />
                {dynamicData.description} <br />
                <br/>{dynamicData.created} <br />
                <br />
              </div>
            );
          })}
        </div>
      // </Link>
    );
  }
}

export default List;
