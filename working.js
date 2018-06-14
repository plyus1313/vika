import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import AddRecipe from './components/AddRecipe';


class App extends Component {
  constructor()
  {
    super();
    this.state={
    recipes: [],
    }
  }


  componentDidMount() {
    fetch('https://cookbook-ataxztjiqa.now.sh/api/recipes')
      .then(response => response.json())
      .then(data => this.setState({recipes: data}));
  }


  render() {

    return (
      <Router>
          <div>
             {
               this.state.recipes.map((dynamicData, i) => {
             return(
               <Link to={`/${dynamicData.recipeID}`}>
                  <div className="br3 dim pa3 ma3 ba b--black-10 mv4 w-70 dib mw6 shadow-3 pointer">
                         {/* {dynamicData.recipeID} <br /> */}
                       <br/><span className='title underline'>{dynamicData.name}</span> <br />
                         <br/><img src={dynamicData.image} width="200px" height="auto"/><br />
                        <br/>{ `${dynamicData.description.substring(0,200)} ... `} <br />
                         <br/>{dynamicData.creation} <br />
                </div>
              </Link>
                      );
                    }
                  )
               }
               <AddRecipe />
             </div>
         </Router>
        );
      }
    }


  export default App;
