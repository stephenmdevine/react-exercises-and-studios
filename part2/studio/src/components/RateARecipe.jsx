let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  const rate = Number(props.rating);
  return rate > 0 && rate < 6 ? GiveRating(rate) : null;
}

function GiveRating(rating) {
  return <h3>{stars[rating - 1]} </h3>
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
