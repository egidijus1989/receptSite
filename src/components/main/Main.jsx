import Search from "../search/Search";
import Recipes from "../recipes/Recipes";
import Food from "../../data/Food";
import { useState } from "react";
import RecipesTop from "../recipesTop/RecipesTop";

const Main = () => {
  const [searchTerm, setSearchterm] = useState("");
  const handleInputChange = (e) => {
    setSearchterm(e.target.value);
  };
  const filteredRecipes = Food.filter((recipes) => {
    return recipes.foodName.includes(searchTerm);
  });
  return (
    <div className="container">
      <RecipesTop />
      <Search onSearch={handleInputChange} val={searchTerm} />
      <Recipes items={filteredRecipes} />
    </div>
  );
};
export default Main;
