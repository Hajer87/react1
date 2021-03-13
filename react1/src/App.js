import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Button, Navbar, Nav, NavDropdown, Container, Row, Col, Image} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
   <container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">CheckPoint React1</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://gomycode.com/TN-FR/home">Home</Nav.Link>
      <Nav.Link href="https://developer.mozilla.org/">Docs</Nav.Link>
      <NavDropdown title="courses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Javascript</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">React</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Forum</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Help
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </container>
      <Row>
<Col>


<Form style={{paddingTop: 250, margin: 100}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{ color: '#6495ED'}}>Enter your email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  style={{ backgroundColor: '#E0FFFF', fontWeight:'bold'}}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{ color:'#6495ED' }}>Enter your password</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" style={{ backgroundColor:' #E0FFFF', fontWeight:'bold'}}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
<Col>
      <Image src="./images/img2.jpg" thumbnail className="go"/>
    </Col>

      </Row>
     
    </div>
  );
}

export default App;
