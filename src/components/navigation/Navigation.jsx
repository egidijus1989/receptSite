import "./navigation.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import grain from "../../img/grain.png";
import CategoriesDropdawn from "../catgoriesDropdown/CategoriesDropdawn";

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [categories, setCategories] =useState([])
  useEffect(() =>{
    try{
      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(response=>response.json())
      .then(data=>{
        setCategories(data)
        console.log(data)
        })
    }catch(msg){
      console.log(msg)
    }
  }, [])
  return (
    <Container className="header">
      <Navbar.Brand href="#home" className="Logo">
        <img src={grain}></img>Recipedia
      </Navbar.Brand>
      <Nav className="navigation">
        <Nav.Link href="#home">Home</Nav.Link>
        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            {categories.map((category)=>
              <CategoriesDropdawn key={category.idCategory} category={category.strCategory}/>
            )}
            <li><a className="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>
        <Nav.Link href="#pricing">Community</Nav.Link>
        <Nav.Link href="#pricing">About Us</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Nav.Link>
        <Nav.Link href="#signIn">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
      </Nav>
    </Container>
  );
};
export default Navigation;
