import './about-section.scss'
import whiteStar from './w-star.svg'
import orangeStar from './o-star.svg'

import Button from '../../shared/Button'

const AboutSection = () => {
    return (
        <div className='about-section'>
            <div className='about-section-content'>
                <span className='star-icons'>
                    <img src={whiteStar} alt='white star icon'/>
                    <img src={orangeStar} alt='orange star icon'/>
                    <img src={whiteStar} alt='white star icon'/>
                </span>
                <h2>Hello,<br/> i'm Lucas<br/> Hildever</h2>
                <h2>Hello, i'm Lucas Hildever</h2>
            </div>
            <Button to='/about' className='white-btn'>know more</Button>
        </div>
    )
}

export default AboutSection