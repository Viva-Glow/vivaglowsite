import Carousel from 'react-bootstrap/Carousel';


function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >
      <img className='Carousel' src="https://images.pexels.com/photos/7755654/pexels-photo-7755654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
      <img className='Carousel' src="https://images.pexels.com/photos/9335961/pexels-photo-9335961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider