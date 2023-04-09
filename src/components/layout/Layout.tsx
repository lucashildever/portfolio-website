import { Outlet } from 'react-router-dom'
import Home from '../home/Home'

const Layout = () => {
    return (
        <>
            <Outlet/>
            <Home/>
        </>
    )
}

export default Layout