import { PropsWithChildren } from 'react'
import './contact.scss'

import arrow from '../../assets/arrow.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'

import PageLayout from '../shared/PageLayout'

interface ContactLinkProps extends PropsWithChildren {
    link: string,
    icon?: string,
    mail?: boolean,
    className: string,
}

const ContactLink = ({children, link, icon, className, mail = false}: ContactLinkProps) => {
    if (mail) {
        return (
            <a href={`mailto:${link}`}>
                <img className={className} src={icon}/>
                {children}
                <img className='arrow-link-icon' src={arrow}/>
            </a>
        )
    } else {
        return (
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <img className={className} src={icon}/>
                {children}
                <img className='arrow-link-icon' src={arrow}/>
            </a>
        )
    }
}

const Contact = () => {
    return (
        <PageLayout className='contact-page'>
            <h2>You can find me at:</h2>
            <div className='contact-links'>
                <ContactLink 
                    link='https://github.com/lucashildever' 
                    icon={github}
                    className='github-icon'
                >
                    githum.com/lucashildever
                </ContactLink>
                <ContactLink 
                    link='https://linkedin.com/in/lucashildever' 
                    icon={linkedin}
                    className='linkedin-icon'
                >
                    linkedin.com/in/lucashildever
                </ContactLink>
                <ContactLink 
                    link='lucashildever@outlook.com' 
                    icon={mail} 
                    mail={true}
                    className='mail-icon'
                >
                    lucashildever@outlook.com
                </ContactLink>
            </div>
        </PageLayout>
    )
}

export default Contact