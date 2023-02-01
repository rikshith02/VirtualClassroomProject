import react from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header =() =>{
    return(
        <>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Virtual Classroom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Feature</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;