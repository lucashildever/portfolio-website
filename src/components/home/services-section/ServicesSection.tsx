import { useEffect, useState } from 'react'

import Button from '../../shared/Button'
import './services-section.scss'
import useSwitcher from '../../../hooks/useSwitcher'

const ServicesSection = () => {

    const [content, setContent] = useState<string>('Creative Web solutions & ')

    const switchContent = useSwitcher(3000)

    useEffect(() => {
        if(switchContent) {
            setContent('Creative Web Solutions &')
        } else {
            setContent('Outstanding Design!')
        }
    }, [switchContent])

    return (
        <div className='services-section'>
            <div className='services-sec-content'>
                <h2>{content}</h2>
                <Button to='/services' className='white-btn'>services</Button>
            </div>
        </div>
    )
}

export default ServicesSection