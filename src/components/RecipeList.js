import React from 'react';
import Recipe from './Recipe.js';
import './RecipeList.css'

const RecipeList = (props) => {
  const recipeList = props.recipes.map(function(recipe){
    return(
      <Recipe
        key={recipe.name}
        name={recipe.name}
        ingredients={recipe.ingredients}
        ingredientsStrings={recipe.ingredients}
        removeRecipe={props.removeRecipe}
        saveEdits={props.saveEdits}
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
