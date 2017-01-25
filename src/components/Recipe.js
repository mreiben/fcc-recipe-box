import React, { Component } from 'react';
import './Recipe.css';
import {Button, ButtonToolbar, Accordion, Panel} from 'react-bootstrap';

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
          <Accordion>
            <Panel className="item-header" bsStyle="info" header={this.state.name} eventKey="1">
              <ul>
                {this.state.ingredients}
              </ul>
              <ButtonToolbar>
                <Button bsStyle="danger">Delete</Button>
                <Button bsStyle="primary">Edit</Button>
              </ButtonToolbar>
            </Panel>
          </Accordion>
        </div>
    );
  };
}

export default Recipe;
