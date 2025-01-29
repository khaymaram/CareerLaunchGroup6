import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import './OpenRecipe.css'
import supabase from '../supabase-client';

const HomePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const { data } = await supabase.from('Recipes').select().eq('id', id).single();
            setRecipe(data);
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>

  return (
    <div className='HomePage'>
      <header className='HomePage-header'>
        <h1>Dorm Eats</h1>
        <img src='logo_v2.png' width= '100px' height = '100px' alt='logo'/>
      </header>

      <div className='HomePage-content'>
        <div className='HomePage-ingredients'>
          <h2 className='HomePage-subheading'>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" name="ingredient" value={ingredient}/>
                  <span>{ingredient}</span>
                </label>
              </div>
            ))}
        </div>

        <div className='HomePage-recipes'>
          <h2 className='HomePage-subheading'>Recipes</h2>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" name="step" value={instruction}/>
                  <strong>Step {index + 1}:</strong> {instruction}
                </label>
              </div>
            ))}
          </ul>     
        </div>
      </div>
    </div>
  );
}

export default HomePage;