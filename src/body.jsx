import React from "react"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngredientsList"
import {getRecipeFromChefClaude} from "./ai.js"

export default function Main(){

  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("")

  async function getRecipe(){
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
      setRecipe(recipeMarkdown)
  }

  function addIngredient(formData){
      const newIngredient = formData.get("ingredient")
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return(
    <main>
      <form action={addIngredient} className="add-ingredient">
        <input
            type="text"
            placeholder="e.g. ball pepper"
            name="ingredient"
            id="input"
            aria-label="Add ingredient"
            />
        <button>Add ingredient</button>
      </form>

      {ingredients.length >0  &&
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      }

      {recipe && <AiRecipe recipe={recipe} />}
 <hr />
      <h5>© 2026 Elijah Divine. All rights reserved.</h5>
    </main>
  )
}