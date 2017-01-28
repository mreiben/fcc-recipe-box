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
    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.saveEdits = this.saveEdits.bind(this);
  }

  addRecipe(){
    let data = this.state.recipes.slice();
    let arr = this.state.newIngredients.split(",");
    data.push({name: this.state.newName, ingredients: arr});
    this.setState({recipes: data});
    this.closeAddModal();
  }

  saveEdits(oldN, newN, oldI, newI){
    let n = '';
    let i = '';
    newN === ''? n = oldN : n = newN;
    newI === ''? i = oldI.split(',') : i = newI.split(',');
    let data = this.state.recipes.map(function(recipe){
      return recipe.name === oldN ? {name: n, ingredients: i} : recipe;
    });
    this.setState({recipes: data});

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
  removeRecipe(recipeKey){
    let data = this.state.recipes.filter(function(recipe){
      return recipe.name !== recipeKey;
    });
    this.setState({recipes: data});
  }

  render() {
    return (
      <div className="list-holder">
        <RecipeList
          recipes={this.state.recipes}
          removeRecipe={this.removeRecipe}
          saveEdits={this.saveEdits}
        />
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
            <input type="text" onChange={this.handleNameChange}/>
            <h4>Ingredients:</h4>
            <input
              type="text"
              placeholder="list here separated by commas"
              onChange={this.handleIngredientsChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.addRecipe}>Save</Button>
                <Button bsStyle="danger" onClick={this.closeAddModal}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
