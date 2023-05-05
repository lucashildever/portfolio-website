import { PropsWithChildren } from 'react'
//import { useNavigate } from 'react-router-dom'
import './page-layout.scss'

import arrow from '../../../assets/arrow.svg'
import Button from '../Button'

const PageLayout = ({children, className}: PropsWithChildren<{className?: string}>) => {

    //const navigate = useNavigate()

    return (
        <div className={className}>
            <div className='page-layout-btn'>
                <Button to='/' className='arrow-btn'>
                    <img src={arrow} alt='arrow icon'/>home
                </Button>
                {/* <a onClick={() => navigate(-1)} className='arrow-btn'>
                    <img src={arrow} alt='arrow icon'/>back
                </a> */}
            </div>
            {children}
        </div>
    )
}

export default PageLayout