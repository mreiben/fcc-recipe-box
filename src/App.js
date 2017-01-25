import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAddModal: false,
      newName: '',
      newIngredients: '',
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
    this.openAddModal= this.openAddModal.bind(this);
    this.closeAddModal= this.closeAddModal.bind(this);
    this.addRecipe= this.addRecipe.bind(this);
    this.handleNameChange= this.handleNameChange.bind(this);
    this.handleIngredientsChange= this.handleIngredientsChange.bind(this);
  }

  addRecipe(){
    let data = this.state.recipes.slice();
    let arr = this.state.newIngredients.split(",");
    data.push({name: this.state.newName, ingredients: arr});
    this.setState({recipes: data});
    this.setState({newName: ''});
    this.setState({newIngredients: ''});
    this.closeAddModal();
  }
  openAddModal(){
    this.setState({ showAddModal: true });
  }
  closeAddModal(){
    this.setState({ showAddModal: false });
  }
  handleNameChange(e){
    this.setState({newName: e.target.value});
  }

  handleIngredientsChange(e){
    this.setState({newIngredients: e.target.value});
  }

  render() {
    return (
      <div className="list-holder">
        <RecipeList recipes={this.state.recipes} />
        <ButtonToolbar id="add-btn">
          <Button
            bsStyle="success"
            onClick={this.openAddModal}>
              Add Recipe
          </Button>
        </ButtonToolbar>
        <Modal show={this.state.showAddModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Add New Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Title:</h4>
            <input type="text" name="name" onChange={this.handleNameChange}/>
            <h4>Ingredients:</h4>
            <input
              type="text"
              name="ingredients"
              placeholder="list here separated by commas"
              onChange={this.handleIngredientsChange}
            />
          </Modal.Body>
          <Modal.Footer>
          <ButtonToolbar>
              <Button bsStyle="primary" onClick={this.addRecipe}>Save</Button>
              <Button bsStyle="danger" onClick={this.closeAddModal}>
                Close
              </Button>
          </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
