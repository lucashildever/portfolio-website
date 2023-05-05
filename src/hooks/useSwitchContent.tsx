import { useSelector } from 'react-redux'
import { RootState } from '../states/store'
import { useEffect, useState } from 'react'
import useSwitcher from './useSwitcher'

function useSwitchContent(option: string, time: number) {

    const language = useSelector((state: RootState) => state.language.value)
    const switcher = useSwitcher(time) 

    // contents
    const contactContent = {
        firstContent: 'Have a great project in mind?',
        secondContent: 'Let\'s work together!',
        firstContentPt: 'Tem um projeto em mente?',
        secondContentPt: 'Vamos trabalhar juntos!',
    }

    const servicesContent = {
        firstContent: 'Creative Web Solutions &',
        secondContent: 'Outstanding Design!',
        firstContentPt: 'Soluções Web Criativas &',
        secondContentPt: 'Designs consistentes',
    }

    // types
    type contactType = {
        firstContent: string,
        secondContent: string,
    }

    type contentType = null | contactType
    type currentContentType = null | string

    // content (contain both) and current content (switch between both)
    const [content, setContent] = useState<contentType>()
    const [currentContent, setCurrentContent] = useState<currentContentType>()

    useEffect(() => {
        switch(option) {
            case 'contact':
                if(language) {
                    setContent({
                        firstContent: contactContent.firstContentPt,
                        secondContent: contactContent.secondContentPt,
                    })
                } else {
                    setContent({
                        firstContent: contactContent.firstContent,
                        secondContent: contactContent.secondContent,
                    })
                }
                break
            case 'services':
                if(language) {
                    setContent({
                        firstContent: servicesContent.firstContentPt,
                        secondContent: servicesContent.secondContentPt,
                    })
                } else {
                    setContent({
                        firstContent: servicesContent.firstContent,
                        secondContent: servicesContent.secondContent,
                    })
                }
                break
            default:
                break
        }
    }, [language])

    useEffect(() => {
        switch(option) {
            case 'contact':
                if(switcher) {
                    setCurrentContent(content?.firstContent)
                } else {
                    setCurrentContent(content?.secondContent)
                }
                break
            case 'services':
                if(switcher) {
                    setCurrentContent(content?.firstContent)
                } else {
                    setCurrentContent(content?.secondContent)
                }
                break
            default:
                break
        }
        
    }, [switcher, language])

    return currentContent
}

export default useSwitchContent