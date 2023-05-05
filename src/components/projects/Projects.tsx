import type { RootState } from '../../states/store'
import { useSelector } from 'react-redux'
import useShowContent from '../../hooks/useShowContent'

import './projects.scss'

import PageLayout from '../shared/page-layout/PageLayout'
import ProjectTypeTemplate from './project-type-template/ProjectTypeTemplate'

const Projects = () => {

    const projects = useSelector((state: RootState) => state.projects.value)

    const showContent = useShowContent(300)

    const projectsImages = {
        dev: projects.find(item => item.id === 1)?.img,
        ux: projects.find(item => item.id === 3)?.img,
        illustra: projects.find(item => item.id === 7)?.img,
    }

    return (
        <PageLayout className={`projects-page ${showContent ? 'show-content' : 'hide-content'}`}>
            <ProjectTypeTemplate 
                title='Development'
                desc='Check out some of my web development past projects.'
                img={projectsImages.dev}
                to='development'
            />
            <ProjectTypeTemplate 
                title='UX/UI Design' 
                desc='View some of my UX/UI projects and other Graphic Design works.'
                borders={true}
                img={projectsImages.ux}
                to='ux-ui'
            />
            <ProjectTypeTemplate 
                title='Illustration' 
                desc="View some illustrations i've created for some personal and professional projects."
                img={projectsImages.illustra}
                to='illustration'
            />
        </PageLayout>
    )
}

export default Projects