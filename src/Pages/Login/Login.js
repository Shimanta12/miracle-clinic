import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { error, signInUsingEmailAndPass, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from;

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSignIn = e => {
        e.preventDefault();
        signInUsingEmailAndPass(email, password, redirect_url);
    }
    return (
        <Container className="mt-5 fw-bold">
            <Row className="text-center">
                <Col md={{ span: 5, offset: 4 }} className="login-form p-3 rounded-3">
                    <h1 className="mt-3 text-primary">Login</h1>
                    <Form onSubmit={handleSignIn} autoComplete="off">
                        <FloatingLabel
                            controlId="floatingEmail"
                            label="Email"
                            className="my-3"
                        >
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter your email" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </FloatingLabel>
                        <Button type="submit" variant="primary fw-bold w-100">Login</Button>
                    </Form>
                    <Link className="text-success" to="/signup">Dont have an account?</Link>
                    <p className="text-danger">{error}</p>
                    <br />
                    <Button onClick={signInUsingGoogle} variant="outline-dark fw-bold my-3 fs-5"><i className="fab fa-google "></i> Sign in with Google</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;