import PageArrowBtn from '../shared/PageArrowBtn'
import PageLayout from '../shared/PageLayout'
import './services.scss'

const Services = () => {
    return (
        <PageLayout className='services-page'>
            <h2>Creative Web Solutions <br/>& Outstanding Design</h2>
            <p>Website developed for coint co, an ecommerce focused on selling collectible metal/physic bitcoins Website developed for coint co, an ecommerce focused on selling collectible metal/physic bitcoins.</p>
            <PageArrowBtn to='/projects'>
                view projects
            </PageArrowBtn>
        </PageLayout>
    )
}

export default Services