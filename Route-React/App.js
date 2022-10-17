import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>

    </Router >
  )
}

export default App
