import React, { Component } from 'react';

class Details extends Component {

  render() {
    return (
      <div>
        <h1>Details page, {this.props.recipeID}</h1>
      </div>
    );
  }
}

export default Details;
