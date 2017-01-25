import React, { Component } from 'react';
import './Recipe.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Collapse } from 'react-collapse';

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
      <Collapse isOpened={true || false }>
        <div className="recipe-detail">
          <h3>{this.state.name}</h3>
          <ul>
            {this.state.ingredients}
          </ul>
          <ButtonToolbar>
            <Button bsStyle="danger">Delete</Button>
            <Button>Edit</Button>
          </ButtonToolbar>
        </div>
      </Collapse>
    );
  };
}

export default Recipe;
