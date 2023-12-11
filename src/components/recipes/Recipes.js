import "./recipes.scss";
import FoodCard from "../foodCard/FoodCard";
import { Container, Row, Col } from "react-bootstrap";

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
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Row>
    </Container>
  );
};
export default Recipes;
