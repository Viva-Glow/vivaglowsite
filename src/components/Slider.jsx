import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../css/slider.css'



function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >
      <img className='Carousel' src="https://images.pexels.com/photos/6663456/pexels-photo-6663456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Carousel.Caption className=' BtnText'>
          <h3 className='text'>NUEVOS TRATAMIENTOS</h3>
        
          <Button variant="secondary"  className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
      <img className='Carousel' src="https://images.pexels.com/photos/5042628/pexels-photo-5042628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        
        <Carousel.Caption className=' BtnText'>
         
        <h3 className='text'>CLASES DISPONIBLES</h3>
         
          
          <Button variant="secondary" className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider