import type { RootState } from '../../states/store'
import { useSelector } from 'react-redux'

import PageLayout from '../shared/PageLayout'
import ProjectTemplate from './projectTemplate'
import './projects.scss'

const Projects = () => {

    const projects = useSelector((state: RootState) => state.projects.value)
    console.log(projects)

    return (
        <PageLayout className='projects-page'>
            {
                projects
                    .map(item => 
                        <ProjectTemplate
                            title={item.title}
                            desc={item.desc}
                            live={item.live}
                            code={item.code}
                            img={item.img}
                            key={item.id}
                        />
                    )
            }
        </PageLayout>
    )
}

export default Projects