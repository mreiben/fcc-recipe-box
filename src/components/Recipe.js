import React, { Component } from 'react';
import './Recipe.css';
import {Button, ButtonToolbar, Accordion, Panel, Modal} from 'react-bootstrap';

class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      ingredients: this.props.ingredients,
      ingredientsStrings: this.props.ingredientsStrings,
      showEditModal: false,
      newName: '',
      newIngredients: ''
    }

    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  openEditModal(){
    this.setState({showEditModal: true });
  }
  closeEditModal(){
    this.setState({showEditModal: false });
  }
  handleNameChange(e){
    this.setState({newName: e.target.value});
  }
  handleIngredientsChange(e){
    this.setState({newIngredients: e.target.value});
  }

  updateRecipe(){
    this.props.saveEdits(
      this.state.name,
      this.state.newName,
      this.state.ingredientsStrings.join(","),
      this.state.newIngredients);
    if(this.state.newIngredients !== ''){
      this.setState({ingredients: this.state.newIngredients.split(',')});
    }
    this.setState({showEditModal: false });
  }

  render(){
    const itemList = this.state.ingredients.map(function(ingredient){
      return <li key={ingredient} className="ingredient">{ingredient}</li>
    });
    return(
        <div className="recipe-detail">
          <Accordion>
            <Panel className="item-header" bsStyle="info" header={this.state.name} eventKey="1">
              <ul>
                {itemList}
              </ul>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.openEditModal}>Edit</Button>
                <Button bsStyle="danger" onClick={()=>{this.props.removeRecipe(this.props.name)}}>Delete</Button>
              </ButtonToolbar>
            </Panel>
            <Modal show={this.state.showEditModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title>Edit Recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Title:</h4>
                <input
                  type="text"
                  defaultValue={this.state.name}
                  onChange={this.handleNameChange}
                />
                <h4>Ingredients:</h4>
                <input
                  type="text"
                  defaultValue={this.state.ingredientsStrings.join(",")}
                  onChange={this.handleIngredientsChange}
                />
              </Modal.Body>
              <Modal.Footer>
                <ButtonToolbar>
                    <Button
                      bsStyle="primary"
                      onClick={this.updateRecipe}>Save</Button>
                    <Button bsStyle="danger" onClick={this.closeEditModal}>Cancel</Button>
                </ButtonToolbar>
              </Modal.Footer>
            </Modal>
          </Accordion>
        </div>
    );
  };
}

export default Recipe;
