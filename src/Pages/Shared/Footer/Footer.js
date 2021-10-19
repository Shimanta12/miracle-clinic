import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container className="bg-dark p-3 text-center mt-5 footer" fluid>
            <Row xs={1} md={4} className="d-flex align-items-center">
                <Col>
                    <h4 className="text-light"><i className="fas fa-wave-square text-primary"></i> Miracle <span className="text-primary">Clinic</span></h4>
                    <hr />
                </Col>
                <Col>
                    <Link to="/home">Home</Link><br />
                    <Link to="/about">About Us</Link><br />
                    <Link to="/contact">Contact</Link><br />
                    <hr />
                </Col>
                <Col>
                    <Link to="/home">Get help</Link><br />
                    <Link to="/home">Read FAQs</Link><br />
                    <Link to="/home">View all cities</Link><br />
                    <Link to="/home">Clinics near me</Link>
                    <br /><br />
                    <i className="fab fa-facebook text-primary fs-3"></i>
                    <i className="fab fa-instagram text-danger fs-3 ms-2"></i>
                    <i className="fab fa-twitter text-primary fs-3 ms-2"></i>
                    <hr />
                </Col>
                <Col>
                    <Link to="/home">Privacy policy</Link><br />
                    <Link to="/home">Terms and condition</Link><br />
                    <Link to="/home">Pricing</Link>
                    <hr />
                </Col>
            </Row>
            <p className="text-light fw-bold">&copy; 2021 Miracle Clinic. All Rights Reserved.</p>
        </Container>
    );
};

export default Footer;