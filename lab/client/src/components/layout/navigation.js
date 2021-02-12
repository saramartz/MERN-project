import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar style={{ backgroundColor: '#1D1D1D', borderBottom: '1px solid #3d3c3c' }} expand='lg' className='p-4'>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Link to='/'>
                    <Navbar.Brand as='div' className='text-white'>
                        Hi User!
                    </Navbar.Brand>
                </Link>
                <Link to='/'>
                    <Nav.Link ad='div' className='text-white'>
                        Logout
                    </Nav.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
