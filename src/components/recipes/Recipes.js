import "./recipes.scss";
import FoodCard from "../foodCard/FoodCard";
import { Container, Row, Col } from "react-bootstrap";
import FoodData from "../../data/Food";
import { useState } from "react";

const Recipes = () => {
  return (
    <Container className="recipes">
      <Row className="recipesHeading">
        <Col className="recipesHeadingLeft">
          <h2>Discover, Create, Share</h2>
          <p>Check our most popular recipes of this week</p>
        </Col>
        <Col className="recipesHeadingRight">
          <button>See All</button>
        </Col>
      </Row>
      <Row className="recipesHeadingBody">
        {FoodData.map((post) => (
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
