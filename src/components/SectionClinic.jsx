import React from "react";
import "../css/cardsClinic.scss";
import reductor2 from "../assets/reductor2.jpg"

import manchas from "../assets/manchas.jpg"
import arrugas from "../assets/arrugas.jpg"
import acne from "../assets/acne.jpg"
import gluteos from "../assets/gluteos.jpg"
import depilacion from "../assets/depilacion.jpg"
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
              <strong>CLÍNICA DE MEDICINA ESTÉTICA</strong>
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
              Bienvenidos a <strong>VIVA GLOW</strong>
            </h1>
           </Fade>
          </div>

          <div class="col-md-6 offset-md-3 tituloP">
            <p>
              Somos tu destino para descubrir una belleza que resalte tu
              autenticidad. 
            </p>
            <p>Nuestro equipo de expertos está comprometido en
              ofrecerte tratamientos de vanguardia que te sorprenderán. </p>
              <p>Te
              esperamos en el centro de Valencia. Te acompañaremos a alcanzar
              tus objetivos de bienestar y plenitud.</p>

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
            <h2>NUESTROS <strong>TRATAMIENTOS</strong></h2>
            </Fade>
          </div>
        </div>
        <hr class="divider" />
        <div class="row pb-2">
          <div class="col-md-6 offset-md-3 ancore">
            <p>
              Descubre un mundo de belleza y bienestar, nuestros tratamientos
              son más que simples procedimientos, son la puerta a una
              versión más radiante de ti misma. 
            </p>
            <p>¿Has soñado con una piel más
              luminosa, una figura más esbelta o un rejuvenecimiento facial?  te esperamos para  transformar tus sueños en realidad.</p>
              <p>Inspírate y anímate a dar el primer paso.  </p>
              <p>Resolveremos todas tus dudas, tendrás  el apoyo y la confianza que necesitas para estar segura y radiante a cada paso.</p>
              <p className="pSlider"><a href="#Contact"><b>Contáctanos ¡Te esperamos!</b></a></p>
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
                src={reductor2}
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
                src={manchas}
                alt=""
              />
              {/* <a href="https://www.freepik.es/foto-gratis/atleta-musculoso-joven-pie-mirando-abajo-manos-caderas-pared-gris_12057369.htm#query=mujer%20cuerpo%20esbelto&position=3&from_view=search&track=ais">Imagen de diana.grytsku</a> en Freepik */}
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
                src={arrugas}
                alt=""
              />
              {/* <a href="https://www.freepik.es/foto-gratis/cabeza-atractiva-morena-femenina-pecas-piel-bronceada-disfruta-tomando-sol-vacaciones-verano-toca-piel-suave-tierna-cepilla-suavemente-cara-yemas-dedos-sonrie-lindo-fondo-blanco_24591382.htm#query=rostro%20mujer%20con%20manchas&position=12&from_view=search&track=ais">Imagen de cookie_studio</a> en Freepik */}
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
                src={acne}
                alt=""
              />
              {/* Imagen de <a href="https://www.freepik.es/foto-gratis/retrato-mujer-rica-rubia-mediana-edad_31286547.htm#query=mujer%20adulta%20rostro&position=14&from_view=search&track=ais">Freepik</a> */}
              <figcaption className="fig1 figC">
               
                <h4>TRATAMIENTO ANTI-ACNÉ</h4>

                <p>La confianza empieza con una piel impecable. Nuestro tratamiento antiacné te libera de las preocupaciones y te devuelve una piel clara y radiante. ¡Descubre la belleza que hay bajo cada granito y recupera tu autoestima!</p>
{/*                 
                <button>More Info</button> */}
               
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* <SwiperSlide>
          <figure>
              <h1>descrubre nuestro inovadortratamiento reductor</h1>
              <img
                src={reductor}
                alt=""
              />
              <figcaption className="fig1 figB" >
               
                <h4>REDUCTOR INTENSIVO </h4> <br />

                <p>Reafirma tu belleza y esculpe tu cuerpo. Es el secreto de una figura definida y segura. ¡Descubre una nueva versión de ti misma y obtén tu figura deseada. Reducirás de 4 a 7 cm. ¡Notarás la diferencia! </p>

               
              </figcaption>
            </figure>
          </SwiperSlide> */}
          <SwiperSlide>
          <figure>
              {/* <h1>descrubre nuestro inovadortratamiento reductor</h1> */}
              <img
                src={gluteos}
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
                src={depilacion}
                alt=""
              />
              {/* Imagen de <a href="https://www.freepik.es/foto-gratis/hermosa-joven-productos-spa-casa_11107017.htm#query=mujer%20depilacion&position=16&from_view=search&track=ais">Freepik</a> */}
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

      
    </>
  );
};

export default SectionClinic;
