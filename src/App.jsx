import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "./routes/RoutesDos";
import Home from "./pages/Home"
// import react from 'react'
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import SectionCourses from "./components/SectionCourses";
// import SectionClinic from "./components/SectionClinic";
// import Slider from "./components/Slider";

import './App.css'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDos />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/slider" element={<Slider />} />
        <Route path="/sectionClinic" element={<SectionClinic />} />
        <Route path="/sectionCourses" element={<SectionCourses />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
