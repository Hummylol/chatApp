import React from 'react'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App