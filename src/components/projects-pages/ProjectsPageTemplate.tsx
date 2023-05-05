import type { RootState } from '../../states/store'
import { useSelector } from 'react-redux'
import './projects-page-template.scss'

import PageLayout from '../shared/page-layout/PageLayout'
import ProjectTemplate from '../shared/project-template/ProjectTemplate'
import { FC } from 'react'
import useShowContent from '../../hooks/useShowContent'

interface ProjectsPageTemplateProps {
    className: string,
    projectType: string,
}

const ProjectsPageTemplate: FC<ProjectsPageTemplateProps> = ({className, projectType}) => {

    const projects = useSelector((state: RootState) => state.projects.value)

    const showContent = useShowContent(300)

    return (
        <PageLayout className={`${className} ${showContent ? 'show-content' : 'hide-content'}`}>
            {
                projects
                    .filter(project => project.type === projectType)
                    .map(project => (
                        <ProjectTemplate
                            title={project.title}
                            desc={project.desc}
                            img={project.img}
                            live={project.live}
                            code={project.code}
                            key={project.id}
                        />
                    ))
            }
        </PageLayout>
    )
}

export default ProjectsPageTemplate