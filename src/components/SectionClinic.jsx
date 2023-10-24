import React from "react";
import "../css/cardsClinic.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Fade } from "react-awesome-reveal";

const SectionClinic = () => {
  return (
    <>
      <div class="container text-center containerClinicBanner p-2 ">
        {/* Title clinic------------ */}
        <div class="row ">
          <div class="col-md-6 offset-md-3 tituloP">
            <h2>
              <strong>CLÍNICA ESTÉTICA DE AVANZADA</strong>
            </h2>
          </div>
        </div>
      </div>

      {/* welcome Title ------------------------- */}
      <div class="container text-center containerWelcome">
        <div className="row ">
          <div class="col-md-6 offset-md-3 mediaTitle">
          <Fade>
            <h1 className="tituloP tituloPB tituloPB1">
              Bienvenidos a <strong>Viva Glow</strong>
            </h1>
           </Fade>
          </div>

          <div class="col-md-6 offset-md-3 tituloP">
            <p>
              Somos tu destino para descubrir una belleza que resalte tu
              autenticidad. Nuestro equipo de expertos está comprometido en
              ofrecerte tratamientos de vanguardia que te sorprenderán. Te
              esperamos en el centro de Valencia. Te acompañaremos a alcanzar
              tus objetivos de bienestar y plenitud.
            </p>

            <p className="pSlider">
              <b>Te invitamos a redescubrir tu belleza natural</b>
            </p>

            <p className="pSlider2">
              <b>Tu transformación comienza aquí</b>
            </p>
          </div>
        </div>
      </div>
      {/* end welcome Title ------------------------- */}

      <div class="container text-center containerClinic">
        {/* Title clinic------------ */}
        <div class="row ">
          <div class="col-md-6 offset-md-3 tituloP  tituloPB tituloPB2 ">
          <Fade>
            <h2>Nuestros tratamientos</h2>
            </Fade>
          </div>
        </div>
        <hr class="divider" />
        <div class="row pb-2">
          <div class="col-md-6 offset-md-3">
            <p>
              Descubre un mundo de belleza y bienestar, nuestros tratamientos
              son son más que simples procedimientos, son la puerta a una
              versión más radiante de ti misma. 
            </p>
            <p>¿Has soñado con una piel más
              luminosa, una figura más esbelta o un rejuvenecimiento facial?  te esperamos para  transformar tus sueños en realidad.</p>
              <p>Inspírate y anímate a dar el primer paso. Resolveremos todas tus dudas, tendrás  el apoyo y la confianza que necesitas para estar segura y radiante a cada paso. </p>
              <p className="pSlider"><b>Contáctanos ¡Te esperamos!</b></p>
          </div>
        </div>
        {/*  end Title clinic------------ */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          //  spaceBetween={50}
          slidesPerView="auto"
          navigation
          autoplay={{ delay: 4000 }}
          //  pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {/* card1------------------- */}
          <SwiperSlide>
            <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figA">
               
                <h4>INNOVADOR TRATAMIENTO REDUCTOR</h4> 

                <p>La solución definitiva para eliminar esos cúmulos de grasa que el ejercicio no puede alcanzar. ¡Transforma tu figura y recupera tu confianza!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card2------------------- */}
          <SwiperSlide>
          <figure >
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figA">
               
                <h4>DÍ ADIOS A LAS MANCHAS DE TU PIEL</h4> <br />

                <p>Recupera la luminosidad de tu piel. Con nuestro tratamiento lograrás una piel impecable y radiante. ¡Descubre la belleza natural que hay debajo y despídete de las imperfecciones!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card3------------------- */}
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1  figB">
               
                <h4>OLVÍDATE DE TUS ARRUGAS</h4> <br />

                <p>Transforma el tiempo en tu aliado. Nuestro tratamiento antiarrugas te devuelve la juventud y la confianza que mereces. ¡Rejuvenece tu belleza y haz que las arrugas sean solo un recuerdo del pasado!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card4------------------- */}
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figC">
               
                <h4>TRATAMIENTO ANTI-ACNÉ</h4>

                <p>La confianza empieza con una piel impecable. Nuestro tratamiento antiacné te libera de las preocupaciones y te devuelve una piel clara y radiante. ¡Descubre la belleza que hay bajo cada granito y recupera tu autoestima!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figB" >
               
                <h4>REDUCTOR INTENSIVO </h4> <br />

                <p>Reafirma tu belleza y esculpe tu cuerpo. Es el secreto de una figura definida y segura. ¡Descubre una nueva versión de ti misma y obtén tu figura deseada. Reducirás de 4 a 7 cm. ¡Notarás la diferencia! </p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figB">
               
                <h4>LEVANTAMIENTO DE GLÚTEOS </h4> <br />

                <p>Aumenta tu confianza y tu estilo. Descubre cómo podemos elevar no solo tus glúteos, sino también tu autoestima. ¡Consigue la figura que siempre has deseado y camina con orgullo. </p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
                alt=""
              />
              <figcaption className="fig1 figB">
               
                <h4>DEPILACIÓN LASER DIODO DE ÚLTIMA GENERACIÓN</h4> <br />

                <p>Redefine la suavidad y la comodidad, brindándote resultados duraderos y la piel que siempre has deseado. ¡Embárcate en una piel libre de preocupaciones y abraza la suavidad definitiva!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <section className="sectionClinic">
      
        <figure>
          <h1>Sirius</h1>
          <img
            src="https://img.freepik.com/foto-gratis/persona-que-recibe-tratamiento-belleza-microagujas_23-2149334245.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            alt=""
          />
          <figcaption>
            <h3>Anti-Manchas</h3>

            <p>4 a 6 sesiones</p>
            <p>Limpieza profunda</p>
            <p>Microdermoabrasion</p>
            <p>Antioxidantes </p>
       
          </figcaption>
        </figure>
     
        <figure class="image-block">
          <h1>Tratamiento 2</h1>
          <img
            src="https://img.freepik.com/foto-gratis/mujer-relajante-salon-belleza_23-2148895559.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            alt=""
          />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
      
        <figure class="image-block">
          <h1>Tratamiento 3</h1>
          <img
            src="https://img.freepik.com/foto-gratis/retrato-mujer-cabello-morena-preparacion-rejuvenecimiento-operacion-cosmetologia-salon-belleza-manos-guantes-azules-dibujando-cara-botox-belleza_197531-2778.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            alt=""
          />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
  
        <figure class="image-block">
          <h1>Tratamiento 4</h1>
          <img
            src="https://img.freepik.com/foto-gratis/retrato-mujer-cabello-morena-preparacion-rejuvenecimiento-operacion-cosmetologia-salon-belleza-manos-guantes-azules-dibujando-cara-botox-belleza_197531-2778.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            alt=""
          />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
       
        <figure class="image-block">
          <h1>Tratamiento 5</h1>
          <img
            src="https://img.freepik.com/foto-gratis/retrato-mujer-cabello-morena-preparacion-rejuvenecimiento-operacion-cosmetologia-salon-belleza-manos-guantes-azules-dibujando-cara-botox-belleza_197531-2778.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            alt=""
          />
          <figcaption>
            <h3>More Info</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <button>More Info</button>
          </figcaption>
        </figure>
      </section> */}
    </>
  );
};

export default SectionClinic;
