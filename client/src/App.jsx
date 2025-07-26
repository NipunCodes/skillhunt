import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'
import ClientDashboard from './pages/ClientDashboard.jsx'
import JobCategory from './pages/JobCategory.jsx'
import CreateJobForm from './pages/CreateJobForm.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="/jobcategory" element={<JobCategory />} />
        <Route path="/createjobform" element={<CreateJobForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App
