import { useSelector } from 'react-redux'
import { RootState } from '../../../states/store'

import useShowContent from '../../../hooks/useShowContent'
import useSwitchContent from '../../../hooks/useSwitchContent'

import './services-section.scss'
import Button from '../../shared/Button'

const ServicesSection = () => {

    const language = useSelector((state: RootState) => state.language.value)
    const showContent = useShowContent(900)
    const content = useSwitchContent('services', 500)

    return (
        <div className={`services-section ${showContent ? 'show-content' : 'hide-content'}`}>
            <div className='services-sec-content'>
                <h2>{content || 'Creative Web solutions & '}</h2>
                <Button to='/services' className='white-btn'>
                    {language ? 'serviços' : 'services'}
                </Button>
            </div>
        </div>
    )
}

export default ServicesSection