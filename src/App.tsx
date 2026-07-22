import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MentionsLegales from './pages/MentionsLegales'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App