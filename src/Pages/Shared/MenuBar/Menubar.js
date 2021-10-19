import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Menubar = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light fw-bold" fixed="top">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/home" >
                    <h4><i className="fas fa-wave-square text-primary"></i> Miracle <span className="text-primary">Clinic</span></h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>

                    {!user.email ? <Nav className="d-flex align-items-center"><Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">
                            <Button variant="primary" size="sm">Sign Up</Button>
                        </Nav.Link></Nav>
                        : <Nav className="d-flex align-items-center"><Nav.Link>
                            <span className="fw-bold text-success">{user?.displayName}</span>
                            <Button onClick={logOut} className="ms-3" variant="primary" size="sm">Log Out <i className="fas fa-sign-out-alt"></i></Button>
                        </Nav.Link></Nav>}

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Menubar;