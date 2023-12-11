import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import grain from "../../img/grain.png";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="upper">
          <Navbar.Brand href="#home" className="Logo">
            <img src={grain}></img>Recipedia
          </Navbar.Brand>
        </Col>
      </Row>
      <Row>
        <Col className="lowerLeft">
          <ul>
            <li>
              <h3>Menu</h3>
            </li>
            <li>
              <a href="#" className="homeLink">
                Home
              </a>
            </li>
            <li>
              <a href="#">Recipe</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Categories</h3>
            </li>
            <li>
              <a href="#">Breakfast</a>
            </li>
            <li>
              <a href="#">Lunch</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
            <li>
              <a href="#">Desert</a>
            </li>
            <li>
              <a href="#">Drink</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Social</h3>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </Col>
        <Col className="lowerRight">
          <div>
            <h3>Sign up for our newsletter</h3>
          </div>
          <div>
            <form>
              <input type="email" placeholder="Your Email Address"></input>
              <button>Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
