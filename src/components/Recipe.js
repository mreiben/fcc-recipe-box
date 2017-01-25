import React, { Component } from 'react';
import './Recipe.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Recipe extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      ingredients: this.props.ingredients
    }
  }

  render(){
    return(
        <div className="recipe-detail">
          <h3>{this.state.name}</h3>
          <ul>
            {this.state.ingredients}
          </ul>
          <ButtonToolbar>
            <Button bsStyle="danger">Delete</Button>
            <Button bsStyle="primary">Edit</Button>
          </ButtonToolbar>
        </div>
    );
  };
}

export default Recipe;
