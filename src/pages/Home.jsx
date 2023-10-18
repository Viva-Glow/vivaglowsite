import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import SectionClinic from '../components/SectionClinic'
import SectionCourses from '../components/SectionCourses'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'




const Home = () => {
  return (
   <>
  
 
   <NavBar/>
   <div id='Slider'>
    
   <Slider/>
    </div >

    <div id='Clinic'>

   <SectionClinic/>
    </div>
    <div id='Courses'>


   <SectionCourses/>
    </div>

    <section id='About'>
   <About/>

    </section>
    <div id='Contact'>

   <Contact/>
    </div>
   <div className="wh">
          <a
            href=" https://api.whatsapp.com/send?phone=34663531305"
            className="whatsapp"
            target="_blank"
          >
            {" "}
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
   <Footer/>


   </>
  )
}

export default Home