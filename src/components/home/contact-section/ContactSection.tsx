import './contact-section.scss'
import Button from '../../shared/Button'

const ContactSection = () => {
    return (
        <div className='contact-section'>
            <Button to='/contact' className='white-btn contact-btn'>contact</Button>
            <h2>lets have a coffe!☕</h2>
        </div>
    )
}

export default ContactSection