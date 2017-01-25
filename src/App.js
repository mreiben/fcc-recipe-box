import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAddModal: false,
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

  openAddModal(){
    this.setState({ showAddModal: true });
  }

  closeAddModal(){
    this.setState({ showAddModal: false });
  }

  render() {
    return (
      <div className="list-holder">
        <RecipeList recipes={this.state.recipes} />
        <ButtonToolbar id="add-btn">
          <Button bsStyle="success">Add Recipe</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
