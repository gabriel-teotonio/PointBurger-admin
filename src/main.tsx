import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Routes/Root/index.tsx'
import { FoodList } from './Routes/FoodList/index.tsx'
import { FoodCreate } from './Routes/FoodCreate/index.tsx'
import { FoodUpdate } from './Routes/FoodUpdate/index.tsx'
import { Login } from './Routes/Login/index.tsx'
import { AuthProvider } from './contexts/Auth/AuthProvider.tsx'
import { ProtectedRoute } from './contexts/Auth/RequireAuth.tsx'

const router = createBrowserRouter([
  {
    element: <ProtectedRoute><Root/></ProtectedRoute>,
    children:[
      {
        path: "/",
        index: true,
        element: 
          <FoodList />
      },
      {
        path: "/FoodCreate",
        element: (
            <FoodCreate />
        ),
      },
      {
        path: "/FoodUpdate/:id",
        element: 
          <FoodUpdate />
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
