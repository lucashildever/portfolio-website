import { useEffect, useState } from 'react'
import './project-section.scss'

import type { RootState } from '../../../states/store'
import { useSelector } from 'react-redux'

import Button from '../../shared/Button'

const ProjectSection = () => {

    type Projects = {
        title: string,
        paragraph: string,
        url: string,
    }
    
    const [currentProject, setCurrentProject] = useState<Projects>({title: '', paragraph: '', url: ''})

    const projects = useSelector((state: RootState) => state.projects.value)

    const sliceParagraph = (paragraph: string): string => {
        if(paragraph.length > 140) {
            return paragraph.slice(0, 140) + '...'
        } else {
            return paragraph
        }
    }

    const updateProject = (val: number): void => {
        setCurrentProject({
            title: projects[val].title,
            paragraph: sliceParagraph(projects[val].desc),
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

    return (
        <div className='project-section'>

            <div className='project-sec-content'>
                <div className='proj-sec-txt-btn'>
                    <h1>{currentProject.title}</h1>
                    <p>{currentProject.paragraph}</p>
                    <Button to='/projects' className='white-btn'>view all projects</Button>
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
                <p>{currentProject.paragraph}</p>
                <Button to='/projects' className='white-btn'>view all projects</Button>
            </div>

        </div>
    )
}

export default ProjectSection