import "./recipes.scss";
import FoodCard from "../foodCard/FoodCard";
import { Container, Row, Col } from "react-bootstrap";
// import FoodData from "../../data/Food";
import { useState, useEffect } from "react";

const Recipes = (props) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function roundNearest5(num) {
    return Math.round(num / 5) * 5;
  }

  let dificulties = ["easy", "medium", "dificult"];

  return (
    <Container className="recipes">
      <Row className="recipesHeadingBody">
        {props.items.slice(0, 6).map((food) => (
          <FoodCard
            key={food.idMeal}
            time={roundNearest5(getRandomInt(15, 45))}
            serving={getRandomInt(2, 5)}
            dificullty={
              dificulties[Math.floor(Math.random() * dificulties.length)]
            }
            foodName={food.strMeal}
            img={food.strMealThumb}
            link={food.idMeal}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Recipes;
