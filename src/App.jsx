import { HashRouter, Route, Routes, Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import TopDecks from './components/TopDecks';
import DecksPerCard from './components/DecksPerCard';

function App() {
  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Clash Royale Deck Builder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/recommended">Recommended Decks</Nav.Link>
            <Nav.Link as={Link} to="/decks-per-card">Decks per Card</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommended" element={<TopDecks />} />
          <Route path="/decks-per-card" element={<DecksPerCard />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
