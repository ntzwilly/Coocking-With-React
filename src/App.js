import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return (
    <RecipeList recipes={sampleRecipe} />
  )
}

const sampleRecipe = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: ' 1. Put salt on Chicken\n 2. Put chicken in oven\n 3. Eat Chicken',
  },
  {
    id: 2,
    name: 'Plain Porc',
    servings: 5,
    cookTime: '0:45',
    instructions: ' 1. Put paprika on Chicken\n 2. Put pork in oven\n 3. Eat pork',
  }
]

export default App;
