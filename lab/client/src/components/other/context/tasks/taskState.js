import { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import { TASKS_PROJECT, ADD_TASK, TASK_ERROR, DELETE_TASK, CHANGE_STATUS, EDIT_TASK } from '../../types/index'

const TaskState = (props) => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Online Shop', state: true, projectId: 1 },
            { id: 2, name: 'Learn Angular', state: true, projectId: 2 },
            { id: 3, name: 'Learn Angular', state: true, projectId: 2 },
            { id: 4, name: 'Landing Page', state: false, projectId: 3 },
            { id: 5, name: 'Online Shop', state: true, projectId: 2 },
            { id: 6, name: 'Learn Angular', state: true, projectId: 1 },
            { id: 7, name: 'Landing Page', state: false, projectId: 3 },
        ],
        projectasks: null,
        taskerror: false,
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = (projectId) => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId,
        })
    }

    const addTask = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task,
        })
    }

    const taskError = () => {
        dispatch({
            type: TASK_ERROR,
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK,
            payload: id,
        })
    }

    const changeStatus = (task) => {
        dispatch({
            type: CHANGE_STATUS,
            payload: task,
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectasks: state.projectasks,
                taskerror: state.taskerror,
                getTasks,
                addTask,
                taskError,
                deleteTask,
                changeStatus,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState
