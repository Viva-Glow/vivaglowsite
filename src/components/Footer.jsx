import React from 'react'
import "../css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <>
    <footer>
      <div class="text">
          <h2>ABOUT ROSA</h2>
          <div><i class="fas fa-asterisk"></i></div>
          <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
      </div>
      <div class="contact-container">
        <div class="social-media">
            <h3>Follow Along</h3>
            <div class="links">
            <FontAwesomeIcon icon={faSquareFacebook} size="xl"  style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{color: "#fcfcfc",}} />
            </div>
        </div>
         
      </div>

  </footer>
      <div class="copyright">
      <svg class="svg-up" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xml:space="preserve"><path fill="#262526" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg>
      <i class="fas fa-angle-double-up arrow-up"></i>
      <ul class="info">
          <li>&copy; ROSA 2017</li>
          <li>13 Hanway Square, London</li>
          <li>Tel: 71494563</li>
          <li>Handcrafted with love by <a href="#">Pixelgrade</a> Team</li>
      </ul>
      <ul class="CTA">
          <li><a href="#">PERMISSIONS AND COPYRIGHT</a></li>
          <li><a href="#">CONTACT THE TEAM</a></li>
      </ul>
  </div>
  </>
  )
}

export default Footer