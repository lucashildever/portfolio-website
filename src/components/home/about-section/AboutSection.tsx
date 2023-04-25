import { ReactNode, useEffect, useRef, useState } from 'react'
import './about-section.scss'

import Button from '../../shared/Button'

import whiteStar from './w-star.svg'
import orangeStar from './o-star.svg'
import useSwitcher from '../../../hooks/useSwitcher'

const AboutSection = () => {

    interface Content {
        content: ReactNode
        contentResponsive: string,
    }

    const [content, setContent] = useState<Content>({
        content: <>Hello,<br/> i'm Lucas<br/> Hildever</>,
        contentResponsive: 'Hello, i\'m Lucas Hildever',
    })

    const switchContent = useSwitcher(1000)

    useEffect(()=> {
        if(switchContent) {
            setContent({
                content: <>I'm a Web<br/>Developer <br/>& Designer</>,
                contentResponsive: 'I\'m a WebDeveloper & Designer',
            })
        } else {
            setContent({
                content: <>Hello,<br/> i'm Lucas<br/> Hildever</>,
                contentResponsive: 'Hello, i\'m Lucas Hildever',
            })
        }
    }, [switchContent])

    return (
        <div className='about-section'>
            <div className='about-section-content'>
                <span className='star-icons'>
                    <img src={whiteStar} alt='white star icon'/>
                    <img src={orangeStar} alt='orange star icon'/>
                    <img src={whiteStar} alt='white star icon'/>
                </span>
                <h2>{content.content}</h2>
                <h2>{content.contentResponsive}</h2>
            </div>
            <Button to='/about' className='white-btn'>know more</Button>
        </div>
    )
}

export default AboutSection