import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipePage = () => {
  let { id } = useParams();
  const [food, setFood] = useState([]);
  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setFood(data.meals[0]);
          console.log(data.meals[0]);
        });
    } catch (msg) {
      console.log(msg);
    }
  }, []);

  function ingredients() {
    let allIngredients = [];
    for (let i = 1; i < 21; i++) {
      if (food[`strIngredient${i}`] !== "") {
        allIngredients.push(
          <li key={i}>
            {food[`strIngredient${i}`] +
              "        ,measure: " +
              food[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return allIngredients;
  }

  return (
    <div className="container">
      <h1 className="my-2 text-center fw-bold fst-italic">{food.strMeal}</h1>
      <div className="d-flex justify-content-center">
        <img className="my-2" src={food.strMealThumb} alt="" />
      </div>
      <h5 className="my-2">Category: {food.strCategory}</h5>
      <h5 className="my-2">Area of origin: {food.strArea}</h5>
      <p>
        <span className="fs-3">How to make: </span>
        {food.strInstructions}
      </p>
      <h5 className="my-2">Ingrediedents:</h5>
      <ul>{ingredients()}</ul>
      <a
        className="p-3 bg-success text-decoration-none link-dark rounded-5 my-2"
        href={food.strYoutube}
      >
        Video instruction
      </a>
    </div>
  );
};
export default RecipePage;
