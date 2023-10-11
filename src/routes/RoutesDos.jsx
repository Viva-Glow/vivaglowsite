import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import SectionCourses from "../components/SectionCourses";
// import SectionClinic from "../components/SectionClinic";
// import Slider from "../components/Slider";


const RoutesDos = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/slider" element={<Slider />} />
        <Route path="/sectionClinic" element={<SectionClinic />} />
        <Route path="/sectionCourses" element={<SectionCourses />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} /> */}
    </Routes>
  );
};

export default RoutesDos;
