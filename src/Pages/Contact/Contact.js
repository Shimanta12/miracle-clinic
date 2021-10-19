import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Container className="mt-5 p-0" fluid>
            <div className="contact-banner mt-5 d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="text-primary fw-bold">Contact</h1>
                    <i className="fas fa-arrow-circle-down fs-1 text-primary"></i>
                </div>
            </div>
            <Row xs={1} md={2} className="container mx-auto mt-5 p-5 rounded-3  contact-section">
                <Col>
                    <div>
                        <p><span className="fw-bold">Office location –</span> our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport.</p>
                    </div>
                    <div>
                        <p><span className="fw-bold">Monday to Friday:</span> 9:00 AM to 6:00 PM <br /><span className="fw-bold">Saturday:</span>  9:00 AM to 5:00 PM <br /><span className="fw-bold">Sunday:</span> Closed</p>
                    </div>
                    <div>
                        <p> <span className="fw-bold">Address:</span> 19 k.b Fazlul Kader Road, Panchlish, Chittagong
                            <br /><span className="fw-bold">Phone:</span> 01690166311 <br /> <span className="fw-bold">Email:</span> miracleclinic@gmail.com</p>
                        <p> </p>
                        <p></p>
                    </div>
                </Col>
                <Col className="text-center">
                    <h1 className="text-primary">Contact Us</h1>
                    <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="leave a message" />
                    </Form.Group>
                    <Button variant="primary" size="sm">Send Message <i className="fas fa-envelope"></i></Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;