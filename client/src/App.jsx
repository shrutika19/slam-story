import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import Register from './Components/Register'
import SlamPage from './Pages/SlamPage'
import UserProfile from './Pages/UserProfile'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='create-slam' element={<SlamPage />} />
        <Route path='myprofile' element={<UserProfile />} />

      </Routes>

    </>
  )
}

export default App
