import { useContext } from 'react'
import ProjectContext from '../../other/context/projects/projectContext'
import TaskContext from '../../other/context/tasks/taskContext'

const Project = ({ project }) => {
    // Projects context
    const projectContext = useContext(ProjectContext)
    const { actualProject } = projectContext

    // Tasks context
    const taskContext = useContext(TaskContext)
    const { getTasks } = taskContext

    const setTasks = (id) => {
        actualProject(id) // Select project
        getTasks(id) // Show tasks
    }

    return (
        <li className='my-3'>
            <button className='btn-blank text-white' onClick={() => setTasks(project.id)}>
                {project.name}
            </button>
        </li>
    )
}

export default Project
