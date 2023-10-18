import React from 'react'
import '../css/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <section class="about-section">
    <div class="container">
        <div class="row clearfix">
            
              <div class="content-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column">
                    <div class="sec-title">
                      <div class="title">Sobre nosotros</div>
                        <h2>We Are The Leader In <br/> The Interiores</h2>
                      </div>
                      <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                      <div class="email">Encuentranos aquí: <span class="theme_color"></span></div>
                      <a href="about.html" class="theme-btn btn-style-three"> <FontAwesomeIcon icon={faSquareFacebook} size="xl"  style={{color: "##d7a449",} } className='linkRedes'/>
            <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{color: "##d7a449",}} className='linkRedes'/></a>
                  </div>
              </div>
              
            
              <div class="image-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="image">
                        <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt=""/>
                          
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </section>
  )
}

export default About