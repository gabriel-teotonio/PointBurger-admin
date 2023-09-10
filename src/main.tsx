import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Routes/Root/index.tsx'
import { FoodList } from './Routes/FoodList/index.tsx'
import { FoodCreate } from './Routes/FoodCreate/index.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index: true,
        element: <FoodList />,
      },
      {
        path: "/FoodCreate",
        element: <FoodCreate />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
