import { useEffect, useState } from 'react'
import './project-section.scss'

import type { RootState } from '../../../states/store'
import { useSelector } from 'react-redux'

import useShowContent from '../../../hooks/useShowContent'

import Button from '../../shared/Button'

const ProjectSection = () => {

    const projects = useSelector((state: RootState) => state.projects.value)
    const language = useSelector((state: RootState) => state.language.value)
    
    interface Projects {
        title: string,
        url: string,
    }
    
    const [currentProject, setCurrentProject] = useState<Projects>({
        title: '',
        url: '',
    })

    const updateProject = (val: number): void => {
        setCurrentProject({
            title: projects[val].title,
            url: projects[val].img,
        })
    }

    let currentVal: number = 0
    let nextImage = new Image()

    const updateImage = () => {
        updateProject(currentVal)

        if(currentVal >= projects.length - 1) {
            currentVal = 0
        }

        currentVal++
        nextImage.src = projects[currentVal].img

        nextImage.onload = () => {
            setTimeout(() => {
                updateProject(currentVal)
                updateImage()
            }, 6000)
        }
    }

    useEffect(() => {
        updateImage()
    }, [])

    const showContent = useShowContent(500)

    return (
        <div className={`project-section ${showContent ? 'show-content' : 'hide-content'}`}>

            <div className='project-sec-content'>
                <div className='proj-sec-txt-btn'>
                    <h1>{currentProject.title}</h1>
                    <p>
                        {
                            language ? 
                                'Mais de 100 projetos criados nas áreas de desenvolvimento web, UX/UI e design gráfico. São mais de 3 anos fornecendo servicos de alta qualidade para clientes de todo o mundo. Clique abaixo para ver todos os projetos.'
                            :
                                'More than 100 projects created in web development, UX/UI and graphic design fields. I\'ts 3+ years providing high-end services for clients all over the world. click below to view all the projects.'
                        }
                    </p>
                    <Button to='/projects' className='white-btn'>
                        {
                            language ?
                                'ver todos os projetos'
                            :
                                'view all projects'
                        }
                    </Button>
                </div>
                <div 
                    className='project-sec-img' 
                    style={{backgroundImage: `url(${currentProject.url})`}}>
                </div>
            </div>

            <div className='project-sec-content-responsive'>
                <h1>{currentProject.title}</h1>
                <div 
                    className='project-sec-img' 
                    style={{backgroundImage: `url(${currentProject.url})`}}>
                </div>
                <p>
                    {
                        language ? 
                            'Mais de 100 projetos criados nas áreas de desenvolvimento web, UX/UI e design gráfico. São mais de 3 anos fornecendo servicos de alta qualidade para clientes de todo o mundo. Clique abaixo para ver todos os projetos.'
                        :
                            'More than 100 projects created in web development, UX/UI and graphic design fields. I\'ts 3+ years providing high-end services for clients all over the world. click below to view all the projects.'
                    }
                </p>
                <Button to='/projects' className='white-btn'>
                    {
                        language ?
                            'ver todos os projetos'
                        :
                            'view all projects'
                    }
                </Button>
            </div>

        </div>
    )
}

export default ProjectSection