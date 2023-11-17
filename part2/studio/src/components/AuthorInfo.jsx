import data from "./recipe.json";
import "./styling.css";


function AuthorInfo() {
  const recipeAuthor = data[0].author;
  const recipeAuthorImage = <img src={data[0].authorImage} alt={recipeAuthor} className="authorImage"/>;
  const recipeWebsite = <a href={data[0].website}>{data[0].name}</a>;
   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 