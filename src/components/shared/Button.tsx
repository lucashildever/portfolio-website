import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps  {
    to: string,
    className?: string,
}

const Button = ({ to, className, children }: PropsWithChildren<ButtonProps>) => {
    return (
        <Link className={className} to={to}>
            <button>{children}</button>
        </Link>
    )
}

export default Button