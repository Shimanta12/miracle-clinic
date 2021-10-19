import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { createUserUsingEmailAndPass, error, message, signInUsingGoogle } = useAuth();

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegister = e => {
        e.preventDefault();
        createUserUsingEmailAndPass(name, email, password);
    }
    return (
        <Container className="mt-5 fw-bold">
            <Row className="text-center">
                <Col md={{ span: 5, offset: 4 }} className="login-form p-3 rounded-3">
                    <h1 className="mt-3 text-primary">Register</h1>
                    <Form onSubmit={handleRegister} autoComplete="off">
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="my-3"
                        >
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter your email" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </FloatingLabel>
                        <Button type="submit" variant="primary fw-bold w-100">Register</Button>
                    </Form>
                    <Link className="text-success" to="/login">Already have an account?</Link>
                    <p className="text-danger">{error}</p>
                    <p className="text-primary">{message}</p>
                    <br />
                    <Button onClick={signInUsingGoogle} variant="outline-dark fw-bold my-3 fs-5"><i className="fab fa-google "></i> Sign up with Google</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;