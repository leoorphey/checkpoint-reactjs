// src/App.js
import React from 'react';
import { Navbar, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mon App React-Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Bienvenue sur la page d'accueil</h1>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    Ceci est la première carte. Elle utilise react-bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>
                    Ceci est la deuxième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>
                    Encore une carte pour compléter notre page.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
