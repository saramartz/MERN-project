import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Task from './task'
import ProjectContext from '../../other/context/projects/projectContext'
import TaskContext from '../../other/context/tasks/taskContext'

const TasksList = () => {
    // Projects context
    const projectContext = useContext(ProjectContext)
    const { project, deleteProject } = projectContext

    // Tasks context
    const taskContext = useContext(TaskContext)
    const { projectasks } = taskContext

    if (!project) return <h2 className='text-center'>SELECT A PROJECT</h2>

    return (
        <>
            <h2 className='text-center mb-5'>PROJECT: {project[0].name}</h2>
            <ul className='p-0'>
                {projectasks.length === 0 ? (
                    <p>No hay tareas</p>
                ) : (
                    projectasks.map((task) => <Task key={task.id} task={task} />)
                )}
            </ul>

            <div className='mt-3 pt-2 text-center'>
                <Button
                    onClick={() => deleteProject(project[0].id)}
                    variant='none'
                    className='btn-delete'
                    size='lg'
                    block
                >
                    Delete project &times;
                </Button>
            </div>
        </>
    )
}

export default TasksList
