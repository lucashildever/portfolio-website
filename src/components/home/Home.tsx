import './home.scss'

import AboutSection from './about-section/AboutSection'
import ContactSection from './contact-section/ContactSection'
import ProjectSection from './project-section/ProjectSection'
import ServicesSection from './services-section/ServicesSection'

const Home = () => {
    return (
        <div className='home-layout'>
            <div className='home-layout-content'>
                <div className='left-column'>
                    <AboutSection/>
                    <ServicesSection/>
                </div>
                <div className='right-column'>
                    <ProjectSection/>
                    <ContactSection/>
                </div>
            </div>
            <div className='home-layout-responsive'>
                <AboutSection/>
                <ProjectSection/>
                <ServicesSection/>
                <ContactSection/>
            </div>
        </div>
    )
}

export default Home