import { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TaskContext from '../../other/context/tasks/taskContext'
import ProjectContext from '../../other/context/projects/projectContext'

const Task = ({ task }) => {
    // project
    const projectContext = useContext(ProjectContext)
    const { project } = projectContext
    // tasks
    const taskContext = useContext(TaskContext)
    const { deleteTask, getTasks, changeStatus } = taskContext

    const taskDelete = (id) => {
        deleteTask(id)
        getTasks(project[0].id)
    }

    const changeStatusTask = (task) => {
        task.status ? (task.status = false) : (task.status = true)
        changeStatus(task)
    }

    return (
        <Row className='task-container mt-4'>
            <Col className='d-flex justify-content-around align-items-center'>
                <p className='mr-5'>{task.name}</p>
                {task.state ? (
                    <Button onClick={() => changeStatusTask(task)} className='btn-completed' variant='none'>
                        Completed
                    </Button>
                ) : (
                    <Button onClick={() => changeStatusTask(task)} className='btn-incompleted' variant='none'>
                        Incompleted
                    </Button>
                )}
                <Button variant='light'>Edit</Button>
                <Button variant='dark' onClick={() => taskDelete(task.id)}>
                    Delete
                </Button>
            </Col>
        </Row>
    )
}

export default Task
