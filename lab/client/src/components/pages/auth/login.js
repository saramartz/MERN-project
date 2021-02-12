import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })

    const {email, password } = login

    const handleInputchange = (e) => setLogin({ ...login, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <Row>
                <Col lg={{ span: 6, offset: 3 }} className='login-container'>
                    <Form onSubmit={handleSubmit} className='mb-4'>
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
                        <Button className='mt-4' variant='none' type='submit' size='lg' block>
                            Login
                        </Button>
                    </Form>
                    <Link to={'/signup'} className='text-white'>
                        Doesn't have an account?
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
