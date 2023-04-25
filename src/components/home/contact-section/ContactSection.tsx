import { useEffect, useState } from 'react'
import useSwitcher from '../../../hooks/useSwitcher'
import './contact-section.scss'

import Button from '../../shared/Button'

const ContactSection = () => {

    const [content, setContent] = useState<string>('Have a great project in mind?')
    const switchContent = useSwitcher(5000)

    useEffect(()=> {
        if(switchContent) {
            setContent('Have a great project in mind?')
        } else {
            setContent('Let\' work together!')
        }
    }, [switchContent])

    return (
        <div className='contact-section'>
            <Button to='/contact' className='white-btn contact-btn'>contact</Button>
            <div className='contact-section-txt'>
                <h2>{content}</h2>
            </div>
        </div>
    )
}

export default ContactSection