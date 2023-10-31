import React from 'react'
import Header from './components/commonComponents/Header'
import Footer from './components/commonComponents/Footer'
import Demo from './components/Navlinks/Demo'
import ContactUs from './components/Navlinks/ContactUs'
import About from './components/Navlinks/About'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="demo" element={<Demo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App