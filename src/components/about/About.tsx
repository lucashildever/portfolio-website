import { FC } from 'react'
import useShowContent from '../../hooks/useShowContent'
import './about.scss'

import profile from '../../assets/profile.png'

import PageLayout from '../shared/page-layout/PageLayout'
import PageArrowBtn from '../shared/page-arrow-btn/PageArrowBtn'

interface AboutProps {
    className?: string
}

const About: FC<AboutProps> = () => {

    const showContent = useShowContent(1000)
    
    return(
        <PageLayout className={`about-page ${showContent ? 'show-content' : 'hide-content'}`}>
            <div className='img-txt'>
                <img src={profile} alt='profile picture'/>
                <h2>Hello, i'm <br/>Lucas Hildever</h2>
            </div>
            <p>Im a brazilian software developer and designer with 2+ years of experience. I'm specialized in Web Development and User Interface Design. The main areas and tools i work with are: </p>
            <p> Frontend development (React, Redux, Javascript, Typescript, HTML, CSS, Styled-components and Sass), Backend development (Node.js, Express, MongoDB, Mongoose, PHP, and MySQL) and UX/UI Design (User research, Design Thingink, Figma, UI Design and Prototyping).</p>
            <PageArrowBtn to='/services'>
                view services
            </PageArrowBtn>
        </PageLayout>
    )
}

export default About