import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ingredients}) => {
    return (
        <ul>
            {ingredients.map((ingredient, i) => 
                <Ingredient {...ingredient} key={ i + Math.random() + Date.now()}/>
            )}
        </ul>
    )
}


export default IngredientList