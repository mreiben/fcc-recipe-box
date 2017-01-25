import React, { Component } from 'react';
import './Recipe.css';
import {Button, ButtonToolbar, Accordion, Panel, Modal} from 'react-bootstrap';

class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      ingredients: this.props.ingredients,
      showEditModal: false,
      newName: '',
      newIngredients: ''
    }

    this.openEditModal= this.openEditModal.bind(this);
    this.closeEditModal= this.closeEditModal.bind(this);
    this.handleNameChange= this.handleNameChange.bind(this);
    this.handleIngredientsChange= this.handleIngredientsChange.bind(this);
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

  render(){
    return(
        <div className="recipe-detail">
          <Accordion>
            <Panel className="item-header" bsStyle="info" header={this.state.name} eventKey="1">
              <ul>
                {this.state.ingredients}
              </ul>
              <ButtonToolbar>
                // can't edit item name...
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
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                <h4>Ingredients:</h4>
                <input
                  type="text"
                  placeholder={this.state.ingredients.join(",")}
                  onChange={this.handleIngredientsChange}
                />
              </Modal.Body>
              <Modal.Footer>
                <ButtonToolbar>
                    //can't save changes, once made
                    <Button bsStyle="primary">Save</Button>
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
