import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ProjectContext from '../../other/context/projects/projectContext'
import TaskContext from '../../other/context/tasks/taskContext'

const TaskForm = () => {
    // Projects context
    const projectContext = useContext(ProjectContext)
    const { project } = projectContext
  

    // Tasks context
    const taskContext = useContext(TaskContext)
    const { addTask, taskError, taskerror, getTasks } = taskContext

    const [task, setTask] = useState({
        name: '',
    })
    const { name } = task


    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate
        if (name.trim() === '') {
            taskError()
            return
        }

        // Add new task to project
        task.projectId = project[0].id
        task.state = false
     
        addTask(task)

        // Get tasks again
        getTasks(project[0].id)

        // Restart form
        setTask({
            name: '',
        })
    }

    const handleInputchange = (e) => setTask({ ...task, [e.target.name]: e.target.value })

    if (!project) return null

    return (
        <Form onSubmit={handleSubmit} style={{ margin: '30px 0 150px' }}>
            <Form.Group controlId='project'>
                <Form.Control
                    type='text'
                    name='name'
                    size='lg'
                    value={name}
                    onChange={handleInputchange}
                    placeholder='Task Name'
                />
            </Form.Group>
            <Button className='' variant='grey' type='submit' size='lg' block>
                Add Task
            </Button>
            {taskerror && (
                <Button className='mt-3' size='lg' variant='danger'>
                    Please fill in all fields!
                </Button>
            )}
        </Form>
    )
}

export default TaskForm
