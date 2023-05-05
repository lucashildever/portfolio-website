import { useEffect, useState } from 'react'
import useSwitcher from '../../../hooks/useSwitcher'
import './contact-section.scss'

import Button from '../../shared/Button'
import useShowContent from '../../../hooks/useShowContent'
import useSwitchContent from '../../../hooks/useSwitchContent'
import { useSelector } from 'react-redux'
import { RootState } from '../../../states/store'

const ContactSection = () => {

    const language = useSelector((state: RootState) => state.language.value)
    const showContent = useShowContent(900)
    const content = useSwitchContent('contact', 500)

    return (
        <div className={`contact-section ${showContent ? 'show-content' : 'hide-content'}`}>
            <Button to='/contact' className='white-btn contact-btn'>
                {language ? 'contato' : 'contact'}
            </Button>
            <div className='contact-section-txt'>
                <h2>{content || 'Have a great project in mind?'}</h2>
            </div>
        </div>
    )
}

export default ContactSection