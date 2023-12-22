import "./recipes.scss";
import FoodCard from "../foodCard/FoodCard";
import { Container, Row, Col } from "react-bootstrap";
// import FoodData from "../../data/Food";
import { useState } from "react";

const Recipes = (props) => {
  return (
    <Container className="recipes">
      <Row className="recipesHeadingBody">
        {props.items.map((post) => (
          <FoodCard
            key={post.id}
            time={post.time}
            serving={post.serving}
            dificullty={post.dificullty}
            foodName={post.foodName}
            img={post.img}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Recipes;
