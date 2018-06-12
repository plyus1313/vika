import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:[
        {
          id: '1',
          recipeId: '61922560-9279-432a-8608-fc79f674850d',
          name: 'Shaped Pasta',
          description: 'Shaped pastas are available in many different sizes and specific shapes. They include shapes that resemble shells, bow ties, spirals, snails, wheels and radiators. Shaped pastas are generally found dried. The smaller varieties work well with a simple sauce but most shaped pastas can be paired with a chunkier sauce because they are sturdy enough to hold up with the other ingredients. They are also used in pasta salads and casseroles.',
          creation: Date(),
          image: 'http://www.betterphoto.com/uploads/processed/1201/1201061143531img_0381.jpg'
        },
        {
          id: '2',
          recipeId: 'a5759254-ac5a-4ba8-a575-53b864440861',
          name: 'Tubular Pasta',
          description: 'Tubular pastas are any pastas that are in the shape of a tube. They are available in many different sizes and shapes. Some tubes are long and narrow while others are short and wide. They are found with smooth or grooved exteriors. They are often served with a heavy sauce, but are also used in salads and casseroles. ',
          creation: Date(),
          image: 'https://thumbs.dreamstime.com/b/looking-down-plate-cooked-tubular-pasta-seasoning-herbs-top-view-flavored-macaroni-noodles-served-green-parsley-33781552.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div>
         {
           this.state.data.map((dynamicData, i) =>
           <div>
             {dynamicData.id} <br />
             {dynamicData.name} <br />
             {dynamicData.image}<br />
           </div>

            )
         }
      </div>
    );
  }
}

export default App;
