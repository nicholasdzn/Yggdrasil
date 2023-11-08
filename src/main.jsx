import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import HomePage from './pages/HomePage/HomePage'
import Register from './pages/Register/Register.jsx'
import Chat from './pages/Chat/Chat.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/chat",
    element: <Chat />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
