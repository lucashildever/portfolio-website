import './projectsTemplate.scss'
import arrow from '../../../assets/dark-arrow.svg'
import { FC } from 'react'

interface ProjectTemplateProps {
    title: string,
    desc: string,
    img: string,
    live: string,
    code: string,
}

const ProjectTemplate: FC<ProjectTemplateProps> = ({ title, desc, live, code, img }) => {
    return (
        <div className='project-template'>
            <h1>{title}</h1>
            <img className='project-img' src={`/${img}`} alt='project image'/>
            {/* <div className='project-img' style={{backgroundImage: `url(/${img})`}}></div> */}
            <p>{desc}</p>
            <div className='project-btns'>
                {
                    live !== '' 
                    && 
                    <a className='white-btn' href={live} target='_blank' rel='noopener noreferrer' >
                        <button>view live<img src={arrow} alt='arrow icon'/></button>
                    </a>
                }
                {
                    code !== ''
                    &&
                    <a className='white-btn' href={code} target='_blank' rel='noopener noreferrer' >
                        <button>view code<img src={arrow} alt='arrow icon'/></button>
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectTemplate