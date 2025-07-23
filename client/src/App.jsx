import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'
import ClientDashboard from './pages/ClientDashboard.jsx'
import NoPage from './pages/NoPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/clientdashboard" element={<ClientDashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App
