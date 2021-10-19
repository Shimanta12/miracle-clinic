import React from 'react';
import { Image, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, image, name, description } = service;
    return (
        <div >
            <Col className="service-card  p-3 rounded-3">
                <Image src={image} fluid></Image>
                <h5>{name}</h5>
                <p>{description.slice(0, 150)}<span>...</span></p>
                <Button as={NavLink} to={`/service/${id}`} variant="outline-primary">Learn More <i className="fas fa-caret-right"></i></Button>
            </Col>
        </div>
    );
};

export default Service;