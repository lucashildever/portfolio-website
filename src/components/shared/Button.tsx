import { Link } from 'react-router-dom'

interface ButtonProps {
    to: string,
    className?: string,
    children: React.ReactNode
}

const Button = ({ to, className, children }: ButtonProps) => {
    return (
        <Link className={className} to={to}>
            <button>{children}</button>
        </Link>
    )
}

export default Button