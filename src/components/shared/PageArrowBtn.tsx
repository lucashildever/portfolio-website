import { PropsWithChildren } from 'react'
import arrow from '../../assets/arrow.svg'
import Button from './Button'
import './page-arrow-btn.scss'

const PageArrowBtn = ({children, to}: PropsWithChildren<{to: string}>) => {
    return (
        <Button to={to} className='page-arrow-btn'>
            {children} <img src={arrow} alt='arrow icon' />
        </Button>
    )
}

export default PageArrowBtn