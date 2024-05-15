import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Footer(){


    return (
        <footer className="main-footer" style={{ background: 'orange', marginTop: '40px' }}>
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
    <p>
        At Get Towed, our mission is to assist individuals navigating the aftermath of car accidents. We understand the stress and inconvenience that come with not being able to locate your vehicle after a tow. That's why we've partnered with a network of reputable towing companies, ensuring that you can rely on us to recover your car swiftly and efficiently.
    </p>
    <p>
        Whether you need to pay the towing fee, retrieve your vehicle, or lodge a query about the towing process, our user-friendly platform has you covered. We're here to provide peace of mind and support during challenging times.
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