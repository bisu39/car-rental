import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Vechiles from './pages/Vechiles.jsx'
import Footer from './components/Footer.jsx'
import CarDetails from './pages/CarDetails.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import LogIn from './pages/LogIn.jsx'
import HelpAssist from './components/HelpAssist.jsx'
import { ToastContainer } from 'react-toastify'
import HomeCarDetails from './pages/HomeCarDetails.jsx'
import CarBooking from './pages/CarBooking.jsx'

const App = () => {
  return (
    <div >
      <NavBar />
      <div className='mx-[3vw]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vechiles" element={<Vechiles />} />
          <Route path="/vechiles/:category" element={<Vechiles />} />
          <Route path="/details/:id" element={<CarDetails />} />
          <Route path="/details" element={<HomeCarDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/booking/:id" element={<CarBooking/>} />
        </Routes>
      </div>
      <Footer />
      <HelpAssist />
      <ToastContainer />
    </div>
  )
}

export default App
