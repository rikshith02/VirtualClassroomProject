import react from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Dheader =() =>{
    return(
        <>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Virtual Classroom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#task">Task</Nav.Link>
            <Nav.Link href="#repoet">Report</Nav.Link>
            <Nav.Link href="#material">Material</Nav.Link>
          </Nav>
        </Container>
        <Navbar.Brand href="/">Logout(@Username)</Navbar.Brand>
      </Navbar>
        </>
    )
}

export default Dheader;