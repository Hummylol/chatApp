import React from 'react'
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom"
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import { Toaster } from 'sonner'
import { useAuthContext } from "./context/AuthContext";


const App = () => {
  const { authUser } = useAuthContext();
  return (
    <Router>
      <Toaster richColors position="top-center"/>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
    </Router>
    
  )
}

export default App