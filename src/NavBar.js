import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar style={{ background: '#231834', color: 'white' }} expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '40px' }}>Nasyjma Autos</Navbar.Brand>
        {/* Collapse button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Navbar items */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'white' }}>Products</Nav.Link>
            <Nav.Link href="#aboutus" style={{ color: 'white' }}> About Us</Nav.Link>
            <Nav.Link href="#contactus" style={{ color: 'white' }}>Contact Us</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'white' }}> <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
