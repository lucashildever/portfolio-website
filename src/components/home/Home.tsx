import './home.scss'

import AboutSection from './about-section/AboutSection'
import ContactSection from './contact-section/ContactSection'
import ProjectSection from './project-section/ProjectSection'
import ServicesSection from './services-section/ServicesSection'

const Home = () => {
    return (
        <div className='home-layout'>
            <div className='first-grid'>
                <AboutSection/>
                <ServicesSection/>
            </div>
            <div className='second-grid'>
                <ProjectSection/>
                <ContactSection/>
            </div>
        </div>
    )
}

export default Home