import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          name: "chicken soup",
          ingredients: ["chicken","water","carrots"]
        },
        {
          name: "old-fashioned",
          ingredients: ["rye","sugar","bitters"]
        },
        {
          name: "ceasar salad",
          ingredients: ["lettuce","ceasar dressing"]
        }
      ]
    }
  }

  render() {
    return (
      <div className="list-holder">
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
