import { PropsWithChildren } from 'react'
import Button from './Button'
import arrow from '../../assets/arrow.svg'

const PageLayout = ({children, className}: PropsWithChildren<{className?: string}>) => {
    return (
        <div className={className}>
            <Button to='/' className='arrow-btn'>
                <img src={arrow} alt='arrow icon'/>home
            </Button>
            {children}
        </div>
    )
}

export default PageLayout