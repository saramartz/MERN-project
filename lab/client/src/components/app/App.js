import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import Projects from '../pages/projects/projects-container'
import ProjectState from '../other/context/projects/projectState'
import TaskState from '../other/context/tasks/taskState'

const App = () => {
    return (
        <>
            <main>
                <ProjectState>
                    <TaskState>
                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/projects' component={Projects} />
                        </Switch>
                    </TaskState>
                </ProjectState>
            </main>
        </>
    )
}

export default App
