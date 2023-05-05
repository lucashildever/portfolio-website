import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import useSwitcher from './useSwitcher';

function useContentLang(option: string) {

    const language = useSelector((state: RootState) => state.language.value)

    const switchContent = useSwitcher(1000)

    
    interface aboutType {
        firstContent: {
            content: ReactNode,
            responsiveContent: string,
        },
        secondContent: {
            content: ReactNode,
            responsiveContent: string,
        }
    }

    interface aboutCurrType {
        content: ReactNode,
        responsiveContent: string,
    }

    type contentType = null | aboutType | aboutCurrType

    const [content, setContent] = useState<contentType>({
        firstContent: {
            content: <>Eu sou um<br/> Desenvolvedor Web <br/>& Designer</>,
            responsiveContent: 'Eu sou um Desenvolvedor Web & Designer',
        },
        secondContent: {
            content: <>Olá,<br/> sou Lucas<br/> Hildever</>,
            responsiveContent: 'Olá, sou Lucas Hildever',
        }
    })

    useEffect(() => {
        if(language) {
            setContent({
                firstContent: {
                    content: <>Eu sou um<br/> Desenvolvedor Web <br/>& Designer</>,
                    responsiveContent: 'Eu sou um Desenvolvedor Web & Designer',
                },
                secondContent: {
                    content: <>Olá,<br/> sou Lucas<br/> Hildever</>,
                    responsiveContent: 'Olá, sou Lucas Hildever',
                }
            })
        } else {
            setContent({
                firstContent: {
                    content: <>I'm a Web<br/>Developer <br/>& Designer</>,
                    responsiveContent: 'I\'m a WebDeveloper & Designer',
                },
                secondContent: {
                    content: <>Hello,<br/> i'm Lucas<br/> Hildever</>,
                    responsiveContent: 'Hello, i\'m Lucas Hildever',
                }
            })
        }
    }, [language])

    // const [currentContent, setCurrentContent] = useState<aboutType>()

    // useEffect(()=> {
    //     if(switchContent) {
    //         setCurrentContent(content?.firstContent)
    //     }
    // }, [switchContent])

    


    return 
}

export default useContentLang