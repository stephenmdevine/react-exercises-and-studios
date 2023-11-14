import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1 (7 ounce) block feta cheese", "1 large egg", "2 tablespoons melted butter", "2 tablespoons olive oil", "4 (13x18-inch) sheets frozen phyllo dough, thawed"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}
