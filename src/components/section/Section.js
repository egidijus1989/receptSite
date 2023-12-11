import "./section.scss";
import { Container, Row, Col } from "react-bootstrap";
import breakfast from "../../img/sectioImg.png";
import Button from "react-bootstrap/Button";

const Section = () => {
  return (
    <Container>
      <Row>
        <Col className="left">
          <h1>Cooking Made Fun and Easy: Unleash Your InnerChef</h1>
          <p>
            Discover more than <span>10,000 recipes</span> in your hand with the
            bestrecipe. Help you to find the easiest way to cook.1
          </p>
          <Button variant="warning">Explore Recipes</Button>{" "}
        </Col>
        <Col xxl={6}>
          <img src={breakfast} />
        </Col>
      </Row>
    </Container>
  );
};
export default Section;
