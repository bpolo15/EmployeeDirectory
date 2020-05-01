import React from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import './App.css';
import Jumbotron from './components/Jumbotron/index';
import Employees from "./components/EmployeeList/Employees";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron />
        <Container style = {{ marginTop: 0}}>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
          </Container>
          <Employees />
      </header>
    </div>
  );
}

export default App;
