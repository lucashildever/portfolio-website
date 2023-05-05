import { Outlet } from 'react-router-dom'
import LanguageButton from '../shared/language-button/LanguageButton'

const Layout = () => {
    return (
        <>
            <LanguageButton/>
            <Outlet/>
        </>
    )
}

export default Layout