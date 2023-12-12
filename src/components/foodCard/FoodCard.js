import "./foodCard.scss";
import Card from "react-bootstrap/Card";
import foodImg1 from "../../img/food1.png";
import clock from "../../img/Vector1.png";
import person from "../../img/Vector2.png";
import wifi from "../../img/Vector3.png";

const FoodCard = () => {
  return (
    <Card style={{ width: "25rem" }}>
      <div className="cardUpper">
        <img src={foodImg1} />
        <div className="cardUpperInfo">
          <div className="time">
            <div>
              <img src={clock}></img>
            </div>
            <div className="m-1">10 mins</div>
          </div>
          <div className="person">
            <div>
              <img src={person}></img>
            </div>
            <div>2 serving</div>
          </div>
          <div className="wifi">
            <div>
              <img src={clock}></img>
            </div>
            <div>Easy</div>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title>Creamy Salad</Card.Title>
        <a href="#">View Recipe</a>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
