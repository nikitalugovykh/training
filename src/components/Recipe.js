import React from 'react';
import IngredientList from './IngredientList';
import StepList from './StepList';

const Recipe = ({name, ingredients, steps}) => {
   return ( 
    <>
        <h2>{name}</h2>
        <IngredientList ingredients = {ingredients} />
        <StepList steps = {steps} />
    </>
   )
}
export default Recipe
