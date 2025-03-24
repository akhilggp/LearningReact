export default function IngredientsList(props: any) {
  const list = props.ingredients.map((items: any) => {
    return (
      <li key={items} className="list-items">
        {items}
      </li>
    );
  });

  return (
    <section>
      <h1> Ingredients in hand:</h1>
      <ul>{list}</ul>
      {props.ingredients.length > 1 && (
        <div className="get-recipe-box">
          <h2>Ready for the Recipe?</h2>
          <div>
            <p>Generate a recipe from your list of Ingredients</p>
            <button onClick={props.getRecipe} disabled={props.loading}>
              {props.loading ? "Getting..." : "Get a Recipe"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
