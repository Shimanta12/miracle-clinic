import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Speciality = () => {
    return (
        <Container className="text-center">
            <h1 className="text-center text-primary mb-3">Our Specialities</h1>
            <Row xs={2} md={3} className="g-4">
                <Col className="p-3">
                    <i className="fas fa-briefcase-medical fs-1 text-primary"></i>
                    <h5 className="text-primary">Medical Privacy</h5>
                    <p>We guarantee the safety and sterility of medical equipment as well as the non-disclosure of information.</p>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-user-nurse fs-1 text-primary"></i>
                    <h5 className="text-primary">Famous Doctors</h5>
                    <p>Doctors of our clinic have international certificates and are recognized all over the world. All staff are interned abroad.</p>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-bookmark fs-1 text-primary"></i>
                    <h5 className="text-primary">Booking a <br /> Visit</h5>
                    <p> You can make an appointment for a doctor and also receive a reminder before the visit to the clinic.</p>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-tools fs-1 text-primary"></i>
                    <h5 className="text-primary">Modern Equipment</h5>
                    <p>We use only the most modern medical equipment, skills for modern trends and innovations.</p>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-bolt fs-1 text-primary"></i>
                    <h5 className="text-primary">New Approaches</h5>
                    <p>Modern medicine is developing very quickly and we can offer our clients the most up-to-date approaches and protocols.</p>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-laptop-medical fs-1 text-primary"></i>
                    <h5 className="text-primary">Health Monitoring</h5>
                    <p>We have developed special programs allowing our clients to periodically visit a doctor to monitor their health.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Speciality;