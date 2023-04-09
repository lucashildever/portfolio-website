import Button from '../../shared/Button'
import './project-section.scss'

const ProjectSection = () => {
    return (
        <div className='project-section'>
            <div className='project-sec-content'>
                <h2>Coint Co.</h2>
                <p>Lorem ipsum dolor sit amet. Et itaque voluptas in sequi incidunt ut placeat veritatis eos molestias voluptatem et corrupti sunt vel cumque nulla...
                </p>
                <Button to='/projects' className='white-btn'>view all projects</Button>
            </div>
            <div className='project-sec-img'></div>
        </div>
    )
}

export default ProjectSection