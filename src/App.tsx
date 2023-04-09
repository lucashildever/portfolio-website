import './base.scss'
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'

import Layout from './components/layout/Layout'
import ErrorPage from './components/ErrorPage'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
