import { Link } from "react-router-dom";

const CategoriesDropdawn = (props) => {
  return (
    <>
      <li>
        <Link className="dropdown-item" to={`/category/${props.link}`}>
          {props.name}
        </Link>
      </li>
    </>
  );
};
export default CategoriesDropdawn;
