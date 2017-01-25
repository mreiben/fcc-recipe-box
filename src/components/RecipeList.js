import React from 'react';
import Recipe from './Recipe.js';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './RecipeList.css'

const RecipeList = (props) => {
  const recipeList = props.recipes.map(function(recipe){
    const ingredientsList = recipe.ingredients.map(function(ingredient){
      return <li key={ingredient}>{ingredient}</li>
    });
    return(
      <Recipe
        key={recipe.name}
        name={recipe.name}
        ingredients={ingredientsList}
      />
    );
  });

  return(
    <div className="recipe-holder">
        {recipeList}
        <ButtonToolbar id="add-btn">
          <Button bsStyle="success">Add</Button>
        </ButtonToolbar>
    </div>
  );
};

export default RecipeList;
