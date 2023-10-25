import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import SectionClinic from '../components/SectionClinic'
import SectionCourses from '../components/SectionCourses'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'
import Loading from '../components/Loading'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../css/home.css";




const Home = () => {

const [loading, setLoading ]=useState(true);
useEffect (()=> {
  setTimeout (()=> {
    setLoading (false);
  }, 500)
})


   
  return (
   <>
   <div>

{loading ? (
  <Loading/>
):
(

<div>
<NavBar />
      <div id="Slider">
        <Slider />
      </div>

      <div id="Clinic">
        <SectionClinic />
      </div>
      <div id="Courses">
        <SectionCourses />
      </div>

      <section id="About">
        <About />
      </section>
      <div id="Contact">
        <Contact />
      </div>
      <div className="wh">
        <a
          href=" https://api.whatsapp.com/send?phone=34689818115"
          className="whatsapp"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
      <Footer />
</div>
)

}
   </div>


   </>
  ) ;}

export default Home