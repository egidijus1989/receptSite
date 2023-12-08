import './navigation.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    return(
      <Navbar  data-bs-theme="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="Logo">Recipedia</Navbar.Brand>
          <Nav className="navigation">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Recipe</Nav.Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link href="#signIn"><FontAwesomeIcon icon={faUser} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
export default Navigation