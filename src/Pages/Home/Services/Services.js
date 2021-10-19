import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices()
    return (
        <Container className="mt-5">
            <h1 className="text-center text-primary mb-3">Services we are providing</h1>
            <Row xs={1} md={3} className="g-4">
                {

                    services.map(service => <Service key={service.id} service={service}></Service>)

                }
            </Row>
        </Container>
    );
};

export default Services;