import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Sign Up</h1>

            <Form className='w-50 mx-auto mt-5'>
                <h3 className='text-center my-5'>DON'T HAVE AN ACCOUNT? REGISTER NOW.</h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-3' name="name" type="text" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-3' name="email" type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3' name="password" type="password" placeholder="Password" required />
                    <p className='text-success'>Only number is allowed for password and Minimum digit is 6.</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3' name="password" type="password" placeholder="Repeat Your Password" required />
                </Form.Group>

                <p>Already have an account? <Link to="/signin">Please Login</Link></p>

                <button variant="success" type="submit" class="btn btn-dark py-3 w-100">Sign Up</button>
            </Form>
        </div>
    );
};

export default Signup;