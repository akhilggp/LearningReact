import React from "react";
import { getRecipeFromMistral } from "../ai";

import IngredientsList from "./IngredientsList";
import HFRecipe from "./HFRecipe";
export default function Body() {
  let addRemove = true;
  const [ingredients, updateList] = React.useState<string[]>([]);
  const [recipe, setRecipe] = React.useState("");

  function submitItems(formdata: FormData) {
    const data = formdata.get("ingredient") as string;
    if (addRemove && data !== "") {
      if (ingredients.indexOf(data) == -1)
        updateList((prevItems) => [...prevItems, data]);
    } else {
      updateList((prevItems) => {
        const newItems = [...prevItems];
        if (newItems.indexOf(data) !== -1) {
          newItems.splice(newItems.indexOf(data), 1);
        }
        return newItems;
      });
    }
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown || "");
  }
  return (
    <main>
      <form action={submitItems} className="add-ingredient">
        <input
          type="search"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button
          onClick={() => {
            addRemove = true;
          }}
        >
          + Add Ingredients
        </button>
        <button
          onClick={() => {
            addRemove = false;
          }}
        >
          - Remove Ingredients
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <HFRecipe recipe={recipe} />}
    </main>
  );
}
