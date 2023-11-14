import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Baked Phyllo-Wrapped Feta with Honey</h1>
                    <p>Baked phyllo-wrapped feta with honey is sweet, salty, savory, creamy perfection. The other thing I love about this recipe is how versatile they are—fantastic as an appetizer, or, if you serve these for breakfast with coffee or tea, you are setting yourself up for a very successful day. You could also put a big salad next to one of these and have a delicious lunch or dinner.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

function RecipeAuthor() {
    const authorLink = "https://foodwishes.blogspot.com/";
    const authorPhoto = "https://www.allrecipes.com/thmb/rI3ImaTYU8HVtagwqw5HL2v1Tcs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chef-john-c50f1c2cb23f4e7786d66c30bddf8bcb.jpg";
    const authorName = "John Mitzewich — aka Chef John";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Chef John" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Food Wishes</a> 
           </div>
        </div>
     );
}

export default RecipeDescription;