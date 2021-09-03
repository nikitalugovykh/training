import React from 'react';
import Recipe from './Recipe';

const Menu = ({recipes, title}) => {
   return (
       <section>
           <h1>{title}</h1>
                {recipes.map((recipe, i) => 
                <Recipe {...recipe} key={i + Date.now() + Math.random()}/>
       )} 
       </section>
   )
 }
 export default  Menu