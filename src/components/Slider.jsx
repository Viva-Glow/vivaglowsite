import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Fade } from "react-awesome-reveal";

import '../css/slider.css'



function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/belleza-cuidado-piel-sonriente-mujer-natural-hombros-desnudos-piel-sana-limpia-fresca-luciendo-feliz-tocando-mejilla-chica-aplicar-cosmeticos-faciales-pared-blanca_176420-34259.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sph" alt="" />
        <Carousel.Caption className=' BtnText'>
          <h3 className='text'>NUEVOS 
          <br /> TRATAMIENTOS</h3>
        
          <Button variant="secondary"  className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/masaje-cara_1098-15846.jpg?w=740&t=st=1697577885~exp=1697578485~hmac=33c00f2d6c8e69f76a962ac0b04c6e458d809ba024c69ef4b4ec1373215b82fb" alt="" />
        <Fade> 

        <Carousel.Caption className=' BtnText'>
         
        <h3 className='text'>CLASES
        <br />
         DISPONIBLES</h3>
         
          
          <Button variant="secondary" className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
        </Fade>
        
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider
