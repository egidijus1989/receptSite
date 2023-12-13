import "./foodCard.scss";
import Card from "react-bootstrap/Card";
import foodImg1 from "../../img/food1.png";
import clock from "../../img/Vector1.png";
import person from "../../img/Vector2.png";
import wifi from "../../img/Vector3.png";

const FoodCard = (props) => {
  return (
    <Card style={{ width: "25rem" }}>
      <div className="cardUpper">
        <img src={props.img} />
        <div className="cardUpperInfo">
          <div className="time">
            <div>
              <img src={clock}></img>
            </div>
            <div className="m-1">{props.time}</div>
          </div>
          <div className="person">
            <div>
              <img src={person}></img>
            </div>
            <div>{props.serving}</div>
          </div>
          <div className="wifi">
            <div>
              <img src={clock}></img>
            </div>
            <div>{props.dificullty}</div>
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{props.foodName}</Card.Title>
        <a href="#">View Recipe</a>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
