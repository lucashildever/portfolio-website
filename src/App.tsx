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
import Home from './components/home/Home'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <Projects/>,
          },
          {
            path: 'development',
            element: <h1>dev</h1>,
          },
          {
            path: 'design-uxui',
            element: <h1>design</h1>,
          },
          {
            path: 'illustration',
            element: <h1>illustration</h1>,
          },
        ]
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
