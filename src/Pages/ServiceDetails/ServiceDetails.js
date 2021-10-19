import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import Rating from "react-rating"

const ServiceDetails = () => {
    const [services] = useServices();
    const { serviceId } = useParams();
    const selectedService = services.find(service => service.id === parseInt(serviceId));
    return (
        <Container>
            <Row xs={1} md={2} className="mt-5">
                <Col className="mt-5">
                    <h1>{selectedService?.name}</h1>
                    <p>{selectedService?.description}</p>
                    <div className="d-flex justify-content-between">
                        <Button variant="outline-primary">Book Appointment</Button>
                        <Rating
                            initialRating={selectedService?.rating}
                            emptySymbol="far fa-star text-primary"
                            fullSymbol="fas fa-star text-primary"
                            readonly>
                        </Rating>
                    </div>
                </Col>
                <Col className="mt-5">
                    <Image src={selectedService?.image} fluid></Image>
                </Col>
            </Row>

        </Container>
    );
};

export default ServiceDetails;