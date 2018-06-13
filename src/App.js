import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:[
        {
          // id: '1',
          recipeId: '',
          name: '',
          description: '',
          // creation: Date(),
          image: ''
        }
      ],
    recipes: [],
    currentView: 'list'
    }
  }

  componentDidMount() {
    fetch('https://cookbook-ataxztjiqa.now.sh/api/recipes')
      .then(response => response.json())
      .then(data => this.setState({recipes: data}));
  }

  onLoadDetailPage= (detailData) => {
      this.setState(
        {
          data: {
                    id: detailData.id,
                    recipeId: detail.recipeId,
                    name: detailData.name,
                    description: detailData.description,
                    creation: detailData.creation,
                    image: detailData.image
                  }
                },
                     currentView: 'detail');
                }

  resetView = () => {
    this.setState({currentView: 'list'});
  }

  render() {
    const detailData = this.setState.data;

    return (
      <div>
         {
      (this.state.currentView === 'list')
      ?
           this.state.recipes.map((dynamicData, i) => {
         return (
           <div className="br3 dim pa3 ma3 ba b--black-10 mv4 w-70 dib mw6 shadow-3 pointer">
                {/* <br/> {dynamicData.id} <br /> */}
                {dynamicData.recipeId} <br />
                <br/><span className='title underline'>{dynamicData.name}</span> <br />
                <br/><img src={dynamicData.image} width="200px" height="auto"/><br />
                <br/>{ `${dynamicData.description.substring(0,200)} ... `} <br />
                <br/>{dynamicData.creation} <br />
                <br/>
                  <button onClick={this.onLoadDetailPage(dynamicData)}>
                      Details
                  </button>
                <br />
            </div>
                );
              }
              :
               return (
                 <div>
                    <br/> {detailData.id} <br />
                    <br/>{detailData.recipeId} <br />
                    <br/>{detailData.name} <br />
                    <br/><img src={detailData.image} width="150px" height="auto"/><br />
                    <br/>{detailData.description} <br />
                    <br/>{detailData.creation} <br />
                    <br/>
                        <button onClick={this.resetView()}>
                              Back
                        </button>
                    <br />
                  </div>
                      }
                    );
                  }
               </div>
             );
          }
        }

        export default App;
