import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Header from "./components/header/Header";
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
    </div>
  );
}

export default App;
