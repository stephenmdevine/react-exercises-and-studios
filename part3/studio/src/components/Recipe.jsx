import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.foodandwine.com/author/paul-chung";
   let authorPhoto = "https://images.squarespace-cdn.com/content/v1/59ab16ddccc5c59341624380/302284fc-8c18-4d01-affe-1bd3b6a3c534/LEE_9087.jpg?format=2500w";
   let authorName = "Paul Chung";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", width: "30%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 medium onion, coarsely chopped", "2 Scotch bonnet chiles, chopped", "herbs and spices", "1/2 cup soy sauce", "2 (3 1/2 to 4-pound) chickens, quartered"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Jamaican Jerk Chicken</h1>
            <p>This jerk chicken recipe is from Paul Chung, who grew up in Jamaica and sampled jerk throughout the island. It's fragrant, fiery hot, and smoky all at once.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.foodandwine.com/thmb/AbaDjGVLSIk8MP53z0ZVTPgv88M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg" alt="Jamaican Jerk Chicken" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
