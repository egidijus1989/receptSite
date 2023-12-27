import Search from "../search/Search";
import Recipes from "../recipes/Recipes";
import { useState, useEffect } from "react";
import RecipesTop from "../recipesTop/RecipesTop";
import { faArrowsTurnToDots } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [searchTerm, setSearchterm] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
        .then((response) => response.json())
        .then((data) => {
          setFoods(data.meals);
          console.log(data.meals);
        });
    } catch (msg) {
      console.log(msg);
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchterm(e.target.value);
  };
  const filteredRecipes = foods.filter((recipes) => {
    return recipes.strMeal.includes(searchTerm);
  });
  return (
    <div className="container">
      <RecipesTop />
      <Search onSearch={handleInputChange} val={searchTerm} />
      <Recipes items={filteredRecipes} />
      {/* <Recipes searchTerm={searchTerm} /> */}
    </div>
  );
};
export default Main;
