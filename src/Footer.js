import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Footer(){


    return (
        <footer className="main-footer" style={{ background: '#231834', marginTop: '70px' , color: 'white'}}>
    <div className="footer-middle">
        <Container>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Form>
                        <h2>Contact Us</h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Names</Form.Label>
                            <Form.Control type="text" placeholder="fullnames" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary">Submit</Button>{' '}
                    </Form>
                </div>

                <div className="col-md-4">
    <h4>About Us</h4>
    <h3>Welcome to Nasyjma Autos</h3>
    <p>
        At Nasyjma Autos, we specialize in providing high-quality spare parts and accessories for Volkswagen, Mercedes-Benz, and Audi vehicles. Our mission is to ensure that your car remains in top condition by offering top-notch products and exceptional service.

With a wide range of parts including engine components, brakes, suspension, lighting, interior and exterior accessories, we are your one-stop shop for all your automotive needs.

Our dedicated team of professionals is here to assist you in finding the perfect parts for your vehicle. We are committed to providing excellent customer service and ensuring your complete satisfaction with every purchase.
    </p>
    <p>
       Choose Nasyjma Autos for reliable, top-quality parts and accessories for your Volkswagen, Mercedes-Benz, or Audi vehicle.

Experience the difference with Nasyjma Autos today!
    </p>
</div>

                
                <div className="col-md-4">
                    <h4>Popular Links</h4>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/search"> Search </a>
                        </li>
                        <li>
                            <a href="/query"> Query </a>
                        </li>
                        <li>
                            <a href="/query"> Vehicle Retrieval </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
    <div className="footer-bottom">
        <p className="text-xs-center">
            &copy; 2024 Reserved
        </p>
    </div>
</footer>

    )
}