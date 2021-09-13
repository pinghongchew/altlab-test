import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Row, Col, Image, Navbar } from 'react-bootstrap';
import goldenBurger from './image/burger-gold.jpeg';

function App() {
  return (
    <div>
      <div style={{ backgroundImage: "linear-gradient(to top right, #5ae7f2, #a6f9ff)", padding: "1rem" }}>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Features</Nav.Link>
              <Nav.Link href="#features">Traits</Nav.Link>
              <Nav.Link href="#pricing">Roadmap</Nav.Link>
              <Nav.Link href="#pricing">Team</Nav.Link>
              <Nav.Link href="#pricing">Lore</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <h2>Welcome to Metallic Burger</h2>
              <h3>10000 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h3>
              <p>The collection drops on 2021. The price of each Ape will be 0.02 ETH.</p>
            </Col>
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <Image fluid src={goldenBurger}></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundImage: "linear-gradient(to top right, #75ff83, #d6ffda)", padding: "1rem" }}>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <h2>Welcome to Metallic Burger</h2>
              <h3>10000 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h3>
              <p>The collection drops on 2021. The price of each Ape will be 0.02 ETH.</p>
            </Col>
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <Image fluid src={goldenBurger}></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundImage: "linear-gradient(to top right, #75ff83, #d6ffda)", padding: "1rem" }}>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <h2>Welcome to Metallic Burger</h2>
              <h3>10000 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h3>
              <p>The collection drops on 2021. The price of each Ape will be 0.02 ETH.</p>
            </Col>
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <Image fluid src={goldenBurger}></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundImage: "linear-gradient(to top right, #75ff83, #d6ffda)", padding: "1rem" }}>
        <Container fluid="lg">
          <Row className="justify-content-md-center">
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <h2>Welcome to Metallic Burger</h2>
              <h3>10000 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h3>
              <p>The collection drops on 2021. The price of each Ape will be 0.02 ETH.</p>
            </Col>
            <Col xs={12} md={5} style={{ padding: "1.75rem" }}>
              <Image fluid src={goldenBurger}></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
