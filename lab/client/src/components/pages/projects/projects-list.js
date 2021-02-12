import {useContext, useEffect} from 'react'
import Project from './project'
import ProjectContext from '../../other/context/projects/projectContext'

const ProjectsList = () => {
    const projectContext = useContext(ProjectContext)
    const { projects, getProjects } = projectContext

    useEffect(() => {
        getProjects()
    },[])

    if(projects.length === 0) return <h3 className='text-center'><em>-- No Projects --</em></h3>

    return (
        
        <ul className='my-5 mx-5'>
            {projects.map((project) => (
                <Project key={project.name} project={project} />
            ))}
        </ul>
    )
}

export default ProjectsList
