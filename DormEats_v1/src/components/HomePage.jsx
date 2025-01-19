import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './HomePage.css'
import supabase from '../supabase-client';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      getRecipes();
    }, []);
  
    async function getRecipes() {
      const { data } = await supabase.from("Recipes").select();
      setRecipes(data);
    }

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
      getIngredients();
    }, []);

    async function getIngredients() {
      const {data} = await supabase.from("Ingredients-Table").select();
      setIngredients(data);
    }

  return (
    <div className='HomePage'>
      <header className='HomePage-header'>
        <h1>Dorm Eats</h1>
        <img src='logo_v2.png' width= '100px' height = '100px' alt='logo'/>
      </header>

      <div className='HomePage-content'>
        <div className='HomePage-ingredients'>
          <h2 className='HomePage-subheading'>Select Ingredients</h2>
            {ingredients.map((ingredient) => (
              <div key={ingredient.id}>
                <label>
                  <input type="checkbox" name="ingredient" value={ingredient.name} />
                  {ingredient.name}
                </label>
              </div>
            ))}
        </div>

        <div className='HomePage-recipes'>
          <h2 className='HomePage-subheading'>Recipes</h2>
          <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id} className='HomePage-recipeBlock'>
                  <strong>{recipe.name}</strong>
                  <div>
                      {recipe.ingredients.join(", ")}
                  </div>
                </li>
            ))}
          </ul>
          <Link to="/recipe" >Go to Recipe</Link>        
        </div>
      </div>
    </div>
  );
}

export default HomePage;