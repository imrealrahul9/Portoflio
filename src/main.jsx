import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import PortfolioPage from './pages/Portfolio.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }
`;



const router = createBrowserRouter([
  {
    children: [
        {
          path:"/",
          element:<App/>
        },
        {
            path: "/projects",
            element: <PortfolioPage />,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
  <RouterProvider router={router}/>
  </NextUIProvider>
</React.StrictMode>,
)
