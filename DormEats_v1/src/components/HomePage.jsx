import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <header className='HomePage-header'>
        <h1>DormEats</h1>
        <img src='https://cdn-icons-png.flaticon.com/512/8382/8382732.png' width= '75px' height = '75px' alt='logo'/>
      </header>

      <div className='HomePage-content'>
        <div className='HomePage-ingredients'>
          <h2 className='HomePage-subheading'>Select Ingredients</h2>
            <div>
              <label>
                <input type="checkbox" name="ingredient" value="eggs" />
                Eggs
              </label> 
            </div>

            <div>
              <label>
                <input type="checkbox" name="ingredient" value="bread" />
                Bread
              </label> 
            </div>

            <div>
              <label>
                <input type="checkbox" name="ingredient" value="pasta" />
                Pasta
              </label> 
            </div>

            <div>
              <label>
                <input type="checkbox" name="ingredient" value="spinach" />
                Spinach
              </label> 
            </div>

            <div>
              <label>
                <input type="checkbox" name="ingredient" value="cheese" />
                Cheese
              </label> 
            </div>
        </div>

        <div className='HomePage-recipes'>
          <h2 className='HomePage-subheading'>Recipes</h2>
          <p>grid of recipes here</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;