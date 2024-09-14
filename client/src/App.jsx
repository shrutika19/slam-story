import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import Register from './Components/Register'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </>
  )
}

export default App
