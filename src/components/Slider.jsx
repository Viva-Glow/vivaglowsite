import Carousel from 'react-bootstrap/Carousel';


function Slider () {
  return (
    <Carousel fade className='ConteinerC' >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/mujer-estudio-cosmetologia-procedimientos_1157-33859.jpg?w=826&t=st=1697138194~exp=1697138794~hmac=12cb88316de7a0c98a86c44fe1675d5172ad5725530d4200ffc5b01b8daaa343" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
      <img className='Carousel' src="https://img.freepik.com/foto-gratis/mujeres-maquillandose-plano-medio_23-2149326518.jpg?w=826&t=st=1697138423~exp=1697139023~hmac=ca6a1b7f711ffc373f2cfb0cc3fba3be15750c9e90a6eec52fe63ec82cb51724" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider