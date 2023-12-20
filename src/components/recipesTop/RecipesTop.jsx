import "./recipesTop.scss";
import { Container, Row, Col } from "react-bootstrap";

const RecipesTop = () => {
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
    </Container>
  );
};
export default RecipesTop;
