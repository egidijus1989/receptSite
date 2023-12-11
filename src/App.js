import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
