import Button from '../../shared/Button'
import './services-section.scss'

const ServicesSection = () => {
    return (
        <div className='services-section'>
            <div className='services-sec-content'>
                <h2>Creative Web solutions & </h2>
                <Button to='/services' className='white-btn'>services</Button>
            </div>
        </div>
    )
}

export default ServicesSection