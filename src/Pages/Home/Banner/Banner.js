import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage from './../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Container className="banner d-flex  align-items-center text-center" fluid>
            <Row xs={1} md={2} className="d-flex  align-items-center">
                <Col >
                    <h1 className="text-primary">We do our best for you and your health.</h1>
                    <p>High professional doctors level. All specialists have extensive practical experience and training courses.</p>
                    <Link to="/about">
                        <Button variant="outline-primary">About us <i className="fas fa-angle-double-right"></i></Button>
                    </Link>

                </Col>
                <Col>
                    <Image src={bannerImage} fluid></Image>
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;