import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import ProjectContext from '../../other/context/projects/projectContext'

const ProjectForm = () => {
    // Get state from form
    const projectContext = useContext(ProjectContext)
    const { projectForm, errorForm, showForm, addProject, showError } = projectContext

    const [project, setProject] = useState({
        name: '',
    })

    const { name } = project

    const handleInputchange = (e) => setProject({ ...project, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === '') {
            showError()
            return
        }

        addProject(project)
        
        setProject({
            name: '',
        })
    }

    return (
        <div className='text-center project-form'>
            <Button className='button my-5' variant='grey' type='submit' size='lg' onClick={showForm}>
                Create Project
            </Button>
            {projectForm && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='project' className='px-5 mt-5'>
                        <Form.Control
                            type='text'
                            name='name'
                            size='lg'
                            value={name}
                            onChange={handleInputchange}
                            placeholder='Project Name'
                        />
                    </Form.Group>
                    <Button className='button my-3' variant='grey' type='submit' size='lg'>
                        Add Project
                    </Button>
                </Form>
            )}

            {errorForm && (
                <Button className='mt-3' size='lg' variant='danger'>
                    Please fill in all fields!
                </Button>
            )}
        </div>
    )
}

export default ProjectForm
