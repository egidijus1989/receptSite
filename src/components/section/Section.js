import "./section.scss";
import { Container, Row, Col } from "react-bootstrap";
import breakfast from "../../img/eggandbacon.png";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

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
        <Col className="right">
          <Image src={breakfast} fluid />
        </Col>
      </Row>
    </Container>
  );
};
export default Section;
