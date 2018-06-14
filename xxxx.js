import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';


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
        <Route path="/" exact="true" component="List"/>
        <Route path="/:recipeID" component="Details(${recipeID})"/>
        {/* <Route path="/:recipeID" render={({ args }) => (
                <Details recipeId={args.params.recipeId}/>
               )}/> */}
       </Router>
    );
  }
}



 class List extends React.Component {
  render() {
   return (
          <div>
             {
               this.state.recipes.map((dynamicData, i) => {
             return(
               <Route path="/:recipeID" render={({ args }) => (
                       <Details recipeId={args.params.recipeId}/>
                      )}
               <Link to={`/${dynamicData.recipeID}`}>
                  <div className="br3 dim pa3 ma3 ba b--black-10 mv4 w-70 dib mw6 shadow-3 pointer">
                         {/ <br/> {dynamicData.id} <br /> /}
                         {dynamicData.recipeID} <br />
                       <br/><span className='title underline'>{dynamicData.name}</span> <br />
                         <br/><img src={dynamicData.image} width="200px" height="auto"/><br />
                        <br/>{ `${dynamicData.description.substring(0,200)} ... `} <br />
                         <br/>{dynamicData.creation} <br />
                </div>
              </Link>
              />
                      );
                    }
                  )
               }
             </div>
   )
  }
 }


  export default App;
