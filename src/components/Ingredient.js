import React from 'react';


const Ingredient = ({name, amount, measurement}) => {
    return (
        <li>
            <span>{name}</span>
            <span>{amount}</span>
            <span>{measurement}</span>
        </li>
    )
}

export default Ingredient