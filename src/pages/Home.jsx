import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import SectionClinic from '../components/SectionClinic'
import SectionCourses from '../components/SectionCourses'
import Contact from '../components/Contact'
import Footer from '../components/Footer'




const Home = () => {
  return (
   <>
   <NavBar/>
   <Slider/>
   <SectionClinic/>
   <SectionCourses/>
   <Contact/>
   <Footer/>


   </>
  )
}

export default Home