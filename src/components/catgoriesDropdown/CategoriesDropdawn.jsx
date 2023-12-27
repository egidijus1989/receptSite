import { Link } from "react-router-dom";

const CategoriesDropdawn = (props) => {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#">
          {props.name}
        </a>
      </li>
    </>
  );
};
export default CategoriesDropdawn;
