import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import doctor from './../../../images/doctor.png'
import './DoctorSay.css'

const DoctorSay = () => {
    return (
        <Container className="mt-5">
            <Row xs={1} md={2} className="g-4 d-flex align-items-center">
                <Col>
                    <h1>We will help to find health, to everyone.</h1>
                    <h5 className="text-primary">The optimum ratio of price and quality responsible and conscientious approach</h5>
                    <p>On the basis of the medical center “Nordis” can be given a thorough examination of the body and get the advice of highly qualified specialists in various fields of medicine. According to studies, our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary. In today’s operational department conducted a wide range of operations under local and general anesthesia.</p>
                    <h5>Dr. Sarah wilson</h5>
                </Col>
                <Col className="doctor-image">
                    <Image src={doctor} fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorSay;