import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react'
import ProjectForm from '../pages/projects/project-form'
import ProjectsList from '../pages/projects/projects-list'


const SidebarProject = () => {
    return (
        <Sidebar as={Menu} animation='overlay' inverted vertical visible width='wide'>
            <Menu.Item className='p-0'>
                <h1 className='p-5 text-center' style={{ borderTop: '1px solid #3d3c3c', marginTop: '75px' }}>
                    MERN Tasks
                </h1>
            </Menu.Item>
            <Menu.Item>
                <ProjectForm />
                <h2 className='mt-5 text-center'>YOUR PROJECTS</h2>
                <ProjectsList />
            </Menu.Item>
        </Sidebar>
    )
}
 
export default SidebarProject