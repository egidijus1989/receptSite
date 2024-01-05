import Section from "../section/Section";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import About from "../about/About";

function App() {
  let { id } = useParams();
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Section />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/category/:id" element={<Main />} />
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
