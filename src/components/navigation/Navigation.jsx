import "./navigation.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import grain from "../../img/grain.png";
import CategoriesDropdawn from "../catgoriesDropdown/CategoriesDropdawn";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.categories);
          console.log(data.categories);
        });
    } catch (msg) {
      console.log(msg);
    }
  }, []);
  return (
    <nav expand="lg" className="navbar navbar-expand-lg container">
      <div className="header container-fluid ">
        <Navbar.Brand href="#home" className="Logo">
          <img src={grain}></img>Recipedia
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbaras"
          id="navbarSupportedContent"
        >
          <ul className="nav center">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle fw-bold"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <CategoriesDropdawn
                      key={category.idCategory}
                      name={category.strCategory}
                      link={category.strCategory}
                    />
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="#comunity">Community</a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About Us
              </Link>
            </li>
          </ul>
          <Nav>
            <Nav.Link href="#search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link href="#signIn">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
