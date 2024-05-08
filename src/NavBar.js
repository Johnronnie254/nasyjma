import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){
    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Nasyjma Autos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
            <Nav.Link href="#pricing"> <i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
}