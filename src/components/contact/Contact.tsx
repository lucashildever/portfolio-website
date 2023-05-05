import { PropsWithChildren } from 'react'
import useShowContent from '../../hooks/useShowContent'
import './contact.scss'

import arrow from '../../assets/arrow.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'

import PageLayout from '../shared/page-layout/PageLayout'

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

    const showContent = useShowContent(1000)

    return (
        <PageLayout className={`contact-page ${showContent ? 'show-content' : 'hide-content'}`}>
            <div className='contact-page-content'>
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
            </div>
        </PageLayout>
    )
}

export default Contact