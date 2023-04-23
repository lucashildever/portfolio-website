import './about-section.scss'
import Button from '../../shared/Button'

const AboutSection = () => {
    return (
        <div className='about-section'>
            <span className='spin-icon'>
                <div className='st'></div>
                <div className='nd'></div>
            </span>
            <div className='about-sec-content'>
                <h2>Hello,<br/> i'm Lucas<br/> Hildever</h2>
                <Button to='/about' className='white-btn'>know more</Button>
            </div>
        </div>
    )
}

export default AboutSection