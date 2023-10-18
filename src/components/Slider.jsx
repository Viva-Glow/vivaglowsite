import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Fade } from "react-awesome-reveal";

import '../css/slider.css'



function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >

      <img className='Carousel' src="https://img.freepik.com/foto-gratis/encantadora-mujer-joven-relajada-suave-haciendo-procedimiento-cosmetologico-aplicando-crema-facial-cara-dedos-sonriendo-ampliamente-sintiendose-perfecta-cuidando-piel_176420-24010.jpg?size=626&ext=jpg&ga=GA1.1.1597813839.1697641800&semt=sph" alt="" />

        <Carousel.Caption className=' BtnText'>
        <Fade> 
          <h3 className='text'>TRATAMIENTOS
          <br /> ESTÉTICOS EN VALENCIA</h3>
          </Fade>
        
          <Button variant="secondary"  className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >

      <img className='Carousel' src="https://img.freepik.com/foto-gratis/masaje-cara_1098-15846.jpg?w=740&t=st=1697577885~exp=1697578485~hmac=33c00f2d6c8e69f76a962ac0b04c6e458d809ba024c69ef4b4ec1373215b82fb" alt="" />
        


        <Carousel.Caption className=' BtnText'>
         
        <Fade> 
          <h3 className='text'>ACADEMIA DE
          <br />FORMACIÓN PROFESIONAL</h3>
          </Fade>
         
          
          <Button variant="secondary" className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
       
        
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider
