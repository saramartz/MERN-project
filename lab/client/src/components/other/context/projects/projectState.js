import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT,
} from '../../types'

const ProjectState = (props) => {
    const projects = [
        { id: 1, name: 'Online Shop' },
        { id: 2, name: 'Learn Angular' },
        { id: 3, name: 'Landing Page' },
    ]

    const initialState = {
        projects: [],
        projectForm: false,
        errorForm: false,
        project: null,
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM,
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects,
        })
    }

    const addProject = (project) => {
        project.id = uuid()

        dispatch({
            type: ADD_PROJECT,
            payload: project,
        })
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM,
        })
    }

    const actualProject = (projectId) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId,
        })
    }

    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId,
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                projectForm: state.projectForm,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
