import recipedata from "./recipe.json";

const list = recipedata[0].ingredients;

function Ingredients() {
  const ListOfIngredients = (props) => {
     return props.map((item) => <li key={props.index}>{item}</li>);
  };
  return <ul>{ListOfIngredients(list)}</ul>;
}

function IngredientList() {
   return (
    <div>
      <h3>Ingredients</h3>
      <Ingredients />
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 