import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Applayout from './layout/Applayout'
import Register from './pages/Register'
import SignIn from './pages/Sign_in'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}