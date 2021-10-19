import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import client1 from './../../images/client/client1.jpg'
import client2 from './../../images/client/client2.jpg'
import client3 from './../../images/client/client3.jpg'
import './About.css'

const About = () => {
    return (
        <Container className="mt-5 text-center">
            <h1 className="text-primary pt-3">About Us</h1>
            <Row xs={2} md={4} className="mt-5">
                <Col className="p-3" >
                    <i className="fas fa-users fs-1 mb-3 text-primary"></i>
                    <h5 className="text-primary">7200+</h5>
                    <h5>Healthy and happy customer</h5>
                </Col>

                <Col className="p-3">
                    <i className="fas fa-user-tie fs-1 mb-3 text-primary"></i>
                    <h5 className="text-primary">120+</h5>
                    <h5>Professional medical specialist</h5>
                </Col>
                <Col className="p-3">
                    <i className="far fa-gem fs-1 mb-3 text-primary"></i>
                    <h5 className="text-primary">14+</h5>
                    <h5>Years of impeccable and successful work</h5>
                </Col>
                <Col className="p-3">
                    <i className="fas fa-award fs-1 mb-3 text-primary"></i>
                    <h5 className="text-primary">450+</h5>
                    <h5>Diplomas and awards of our clinic</h5>
                </Col>
            </Row>
            <h1 className="my-5 text-primary">clients say</h1>
            <Row xs={1} md={3} className="g-4">
                <div>
                    <Col className="client-card p-3">
                        <Image className="w-50" src={client1} roundedCircle fluid></Image>
                        <h5>Lara Crown</h5>
                        <p className="fw-bold">Sales manager</p>
                        <p className="mt-4">High level of equipment and doctors. There are no queues and cheap prices. There are interesting complex program for examination of the whole organism. Very good medical center, irecommend!</p>
                    </Col>
                </div>
                <div>
                    <Col className="client-card p-3">
                        <Image className="w-50" src={client2} roundedCircle fluid></Image>
                        <h5>Jarry small</h5>
                        <p className="fw-bold">Director</p>
                        <p className="mt-4">Thanks to the best pediatrician in your center. Every time i address and recieve a high level professionalism! I will recommend you to all of my  friends and acquaintances . The services themselves were rendered qualitatively!</p>
                    </Col>
                </div>
                <div>
                    <Col className="client-card p-3">
                        <Image className="w-50" src={client3} roundedCircle fluid></Image>
                        <h5>Jessica dowl</h5>
                        <p className="fw-bold">Client</p>
                        <p className="mt-4">I want to express my deep gratitude to the surgery john valey for his high professionalism. Very accurately and qualitatively performs his work. Its not the first time i've been referring this doctor! </p>
                    </Col>
                </div>

            </Row>
        </Container>
    );
};

export default About;



