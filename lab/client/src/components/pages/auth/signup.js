import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmation: '',
    })

    const { name, email, password, confirmation } = signup

    const handleInputchange = (e) => setSignup({ ...signup, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <Row>
                <Col lg={{ span: 6, offset: 3 }} className='login-container'>
                    <Form onSubmit={handleSubmit} className='mb-4'>
                        <Form.Group as={Row} controlId='name'>
                            <Form.Label column sm='2'>
                                Name
                            </Form.Label>
                            <Col sm={10} className='pl-5'>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={handleInputchange}
                                    placeholder='Name'
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='email'>
                            <Form.Label column sm='2'>
                                Email
                            </Form.Label>
                            <Col sm={10} className='pl-5'>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleInputchange}
                                    placeholder='Email'
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='password'>
                            <Form.Label column sm='2'>
                                Password
                            </Form.Label>
                            <Col sm={10} className='pl-5'>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={handleInputchange}
                                    placeholder='Password'
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='confirmation'>
                            <Form.Label column sm='2'>
                                Confirm Password
                            </Form.Label>
                            <Col sm={10} className='pl-5'>
                                <Form.Control
                                    type='password'
                                    name='confirmation'
                                    value={confirmation}
                                    onChange={handleInputchange}
                                    placeholder='Password'
                                />
                            </Col>
                        </Form.Group>
                        <Button className='mt-4' variant='none' type='submit' size='lg' block>
                            Signup
                        </Button>
                    </Form>
                    <Link to={'/login'} className='text-white'>
                        Already have an account?
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
