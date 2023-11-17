import data from "./recipe.json";

function RecipeImage() {
   return <img className="recipeImage" src={data[0].recipeImage} alt={data[0].name} />;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 