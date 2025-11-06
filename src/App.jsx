import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Home, Darshan, Events, Seva, Donate, Contact, Login, Dashboard } from './pages'
import './App.css' 
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/darshan" element={<Darshan />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/seva" element={<Seva />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App