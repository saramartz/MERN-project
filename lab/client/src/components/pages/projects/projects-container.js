import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Navigation from '../../layout/navigation'
import TaskForm from '../tasks/task-form'
import TasksList from '../tasks/tasks-list'
import Sidebar from '../../layout/sidebar'

const Projects = () => {

    return (
        <>
            <Row>
                <Col>
                    <Navigation />
                    <Sidebar />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col lg={4} sm={12} className='my-5' style={{ margin: '0 auto' }}>
                    <TaskForm />
                    <TasksList />
                </Col>
            </Row>
        </>
    )
}

export default Projects
