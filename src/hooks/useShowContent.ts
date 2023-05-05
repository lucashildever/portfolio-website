import { useEffect, useState } from 'react';

function useShowContent(delay: number): boolean {
    const [showContent, setShowContent] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(()=> {
            setShowContent(true)
        }, delay)

        return () => {
            
            // setShowContent(false)
            
            // setTimeout(() => {

            // }, 5000)
        }
    }, [])

    return showContent
}

export default useShowContent