import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../context/firebase"

const LoginPage = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firebase.isLoggedIn)
            //navigate
            navigate("/");
    }, [firebase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("login in user......");
        const result = await firebase.signinUserWithEmailAndPassword
            (
                email,
                password
            );
        console.log("Successfull!!", result);

    };

    return <div className="container">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>

        <h1 className='mt-5 mb-5'>OR</h1>
        <Button onClick={firebase.singinWithGoogle} variant='danger'>Sign in  with google</Button>
    </div>
};

export default LoginPage;