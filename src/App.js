import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}

class App extends Component {

componentDidMount() {
  fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
}

  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={ particlesOptions }
        />
        }
      </div>
    );
  }
}

export default App;
