import { TASKS_PROJECT, ADD_TASK, TASK_ERROR, DELETE_TASK, CHANGE_STATUS } from '../../types'

export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                projectasks: state.tasks.filter((task) => task.projectId === action.payload),
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                taskerror: false,
            }
        case TASK_ERROR:
            return {
                ...state,
                taskerror: true,
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            }
        case CHANGE_STATUS:
            return {
                ...state,
                tasks: state.projectasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            }
        default:
            return state
    }
}
