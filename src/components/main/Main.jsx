import Search from "../search/Search";
import Recipes from "../recipes/Recipes";
import { useState, useEffect } from "react";
import RecipesTop from "../recipesTop/RecipesTop";
import { useParams } from "react-router-dom";

const Main = () => {
  const [searchTerm, setSearchterm] = useState("");
  const [foods, setFoods] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchfoods = async () => {
      if (id == null) id = "Beef";
      try {
        await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFoods(data.meals);
            console.log(data.meals);
          });
      } catch (msg) {
        console.log(msg);
      }
    };
    fetchfoods();
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
    </div>
  );
};
export default Main;
