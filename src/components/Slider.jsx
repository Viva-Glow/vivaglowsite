import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../css/slider.css'



function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/retrato-belleza-misterio-sonriente-mujer-jengibre-cabello-largo-posando-lado-mirando_171337-920.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sph" alt="" />
        <Carousel.Caption className=' BtnText'>
          <h3 className='text'>NUEVOS TRATAMIENTOS</h3>
        
          <Button variant="secondary"  className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/mujer-atractiva-recibiendo-procedimientos-belleza-facial-salon-spa_1098-18097.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sphhttps://images.pexels.com/photos/5042628/pexels-photo-5042628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        
        <Carousel.Caption className=' BtnText'>
         
        <h3 className='text'>CLASES DISPONIBLES</h3>
         
          
          <Button variant="secondary" className='buttom'>Quiero saber más</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider