import GlobalStyle from './styles/global'
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Users } from './pages/Users'
import { Casasfit } from './pages/CasasFit'
import { Navbar } from './components/NavBar'
import { Home } from './pages/Home'
import { Notfound } from './pages/NotFound'
import { Footer } from './components/Footer'

function App() {
  return (
    <>   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/casasfit" element={<Casasfit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
