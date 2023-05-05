import useShowContent from '../../hooks/useShowContent'

import PageArrowBtn from '../shared/page-arrow-btn/PageArrowBtn'
import PageLayout from '../shared/page-layout/PageLayout'
import './services.scss'

const Services = () => {

    const showContent = useShowContent(1000)

    return (
        <PageLayout className={`services-page ${showContent ? 'show-content' : 'hide-content'}`}>
            <h2>Creative Web Solutions <br/>& Outstanding Design</h2>
            <p>Website developed for coint co, an ecommerce focused on selling collectible metal/physic bitcoins Website developed for coint co, an ecommerce focused on selling collectible metal/physic bitcoins.</p>
            <PageArrowBtn to='/projects'>
                view projects
            </PageArrowBtn>
        </PageLayout>
    )
}

export default Services