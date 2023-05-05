import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../../states/store'
import { setLanguage } from '../../../states/languageSlice'

import langIcon from '../../../assets/lang.svg'
import './language-button.scss'

const LanguageButton = () => {

    const language = useSelector((state: RootState) => state.language.value)
    const dispatch = useDispatch()

    return (
        <span 
            onClick={() => dispatch(setLanguage(!language))} 
            className='language-button'
        >
            <img src={langIcon} alt='language icon'/>
            <span>{language ? 'English' : 'Português'}</span>
        </span>
    )
}

export default LanguageButton