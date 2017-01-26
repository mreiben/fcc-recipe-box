import React from 'react';
import Recipe from './Recipe.js';
import './RecipeList.css'

const RecipeList = (props) => {
  const recipeList = props.recipes.map(function(recipe){
    const ingredientsList = recipe.ingredients.map(function(ingredient){
      return <li key={ingredient} className="ingredient">{ingredient}</li>
    });
    return(
      <Recipe
        key={recipe.name}
        name={recipe.name}
        ingredients={ingredientsList}
        ingredientsStrings={recipe.ingredients}
        removeRecipe={props.removeRecipe}
      />
    );
  });

  return(
    <div className="recipe-holder">
      {recipeList}
    </div>
  );
};

export default RecipeList;
