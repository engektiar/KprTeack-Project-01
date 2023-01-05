import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Sign In</h1>

            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='py-3' name="email" type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3' name="password" type="password" placeholder="Password" required />
                    <p className='text-success'>Only number is allowed for password and Minimum digit is 6.</p>
                </Form.Group>

                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>

                <button variant="success" type="submit" class="btn btn-dark py-3 w-100">Sign In</button>
            </Form>
        </div>
    );
};

export default Signin;