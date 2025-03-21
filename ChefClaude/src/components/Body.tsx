import React from "react";
export default function Body() {
  let addRemove = true;
  const [item, updateList] = React.useState<string[]>([]);

  const list = item.map((items) => {
    return (
      <li key={items} className="list-items">
        {items}
      </li>
    );
  });

  function submitItems(formdata: FormData) {
    const data = formdata.get("ingredient") as string;
    if (addRemove && data !== "") {
      if (item.indexOf(data) == -1)
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
  return (
    <main>
      <form action={submitItems} className="add-ingredient">
        <input
          type="text"
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
      <h1> Ingredients in hand:</h1>
      <ul>{list}</ul>
      {item.length > 0 && (
        <div className="get-recipe-box">
          <h2>Ready for the Recipe?</h2>
          <div>
            <p>Generate a recipe from your list of Ingredients</p>
            <button>Get a Recipe</button>
          </div>
        </div>
      )}
    </main>
  );
}
