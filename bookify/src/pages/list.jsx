import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../context/firebase";

const ListingPage = () => {
    const firebase = useFirebase();
    const [name, setName] = useState('');
    const [isbnNumber, setIsbnNumber] = useState('');
    const [price, setPrice] = useState('');
    const [coverPic, setCoverPic] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic)
     }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Book Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="ISBN Number"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ISBn</Form.Label>
                    <Form.Control
                        onChange={(e) => setIsbnNumber(e.target.value)}
                        value={isbnNumber}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text"
                        placeholder="price"
                    />
                </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cover Pic</Form.Label>
                    <Form.Control
                        onChange={(e) => setCoverPic(e.target.files[0])}
                        value={coverPic}
                        type="file"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
};

export default ListingPage;
