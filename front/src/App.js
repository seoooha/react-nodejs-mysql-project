import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">seoooha project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">메인</Nav.Link>
          <Nav.Link href="/mypage">마이페이지</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Card>
    <Card.Header>Quote</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.{' '}
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
  </div>
  );
}


export default App;
