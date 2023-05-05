import Button from '../../shared/Button'
import './project-type-template.scss'

interface Props {
    borders?: boolean,
    img?: string,
    title: string,
    desc: string,
    to: string,
}

const ProjectTypeTemplate = ({borders, title, desc, img, to}: Props) => {
    return (
        <div className={`projects-type-template ${borders ? 'borders' : ''}`}>
            <h1>{title}</h1>
            <div className='project-type-info'>
                <p>{desc}</p>
                <Button to={to} className='white-btn'>view projects</Button>
            </div>
            <div className='project-type-img' style={{backgroundImage: `url(${img})`}}></div>
        </div>
    )
} 

export default ProjectTypeTemplate