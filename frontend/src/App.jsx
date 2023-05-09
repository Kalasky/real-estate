import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss'

// TODO: orange circle image behind hero content on home page

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Listings from './pages/Listings'
import Friends from './pages/Friends'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
