import "./foodCard.scss";
import Card from "react-bootstrap/Card";
import foodImg1 from "../../img/food1.png";
import clock from "../../img/Vector1.png";
import person from "../../img/Vector2.png";
import wifi from "../../img/Vector3.png";

const FoodCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={foodImg1} />
      <Card.ImgOverlay>
        <ul>
          <li>
            <img src={clock}></img>10 min.
          </li>
          <li>
            <img src={person}></img>2 serving
          </li>
          <li>
            <img src={wifi}></img>Easy
          </li>
        </ul>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>Creamy Salad</Card.Title>
        <a href="#">View Recipe</a>{" "}
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
