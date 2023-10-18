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

const SectionClinic = () => {
  return (
    <>
      {/* TARJETA DISEÑADA EXTRA----- */}
      {/* <div class="wrapper cardPresentation2">
        <div class="card cardPresentaion">
          <img
            className="imgPresentation"
            src="https://img.freepik.com/vector-gratis/fondo-floral-acuarela-pintada-mano_23-2149026397.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
            width="640"
            height="640"
            alt=""
          />
          <div className="figcap">
            <blockquote>
              We shape our tools and then the tools shape us.
            </blockquote>
            <cite>
              Attributed to Winston Churchill, Marshall McLuhan, and John
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero repudiandae numquam saepe perspiciatis ex. Optio?
            </cite>
           
          </div>
        </div>
      </div> */}
      {/* FIN TARJETA DISEÑADA EXTRA----- */}



      <div class="container text-center containerClinicBanner p-2 ">
        {/* Title clinic------------ */}
        <div class="row ">
          <div class="col-md-6 offset-md-3 tituloP">
            <h2><strong>CLÍNICA ESTÉTICA DE AVANZADA</strong></h2>
          </div>
        </div>
        </div>

      {/* welcome Title ------------------------- */}
      <div class="container text-center containerWelcome">
        <div className="row ">
        <div class="col-md-6 offset-md-3">
          <h1 className="tituloP">
            Bienvenidos a <strong>Viva Glow</strong>
          </h1>
          </div>
          
          <div class="col-md-6 offset-md-3 tituloP">
            <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          architecto pariatur perspiciatis neque praesentium, ab sequi. A
          facilis quibusdam enim nobis harum necessitatibus doloremque pariatur
          cumque praesentium excepturi illum expedita maxime, ea iste suscipit
          libero repellat sit aut, ipsum voluptate deserunt unde ullam! Nostrum,
          reiciendis earum. Velit ad rem debitis.
          </p>
          </div>
        </div>
      </div>
      {/* end welcome Title ------------------------- */}

      <div class="container text-center containerClinic">
        {/* Title clinic------------ */}
        <div class="row ">
          <div class="col-md-6 offset-md-3">
            <h2>Conoce nuestros tratamientos</h2>
          </div>
        </div>
        <hr class="divider" />
        <div class="row pb-2">
          <div class="col-md-6 offset-md-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eum,
              aut totam ea incidunt ullam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident enim temporibus hic nulla
              velit voluptatem sit voluptatibus modi quod reiciendis?
            </p>
          </div>
        </div>
        {/*  end Title clinic------------ */}

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          //  spaceBetween={50}
          slidesPerView="auto"
          navigation
          autoplay={{ delay: 1000 }}
          //  pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {/* card1------------------- */}
          <SwiperSlide>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card2------------------- */}
          <SwiperSlide>
            <figure>
              <h1>Siriuseeee2</h1>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card3------------------- */}
          <SwiperSlide>
            {" "}
            <figure>
              <h1>Siriuseeee3</h1>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          {/* card4------------------- */}
          <SwiperSlide>
            {" "}
            <figure>
              <h1>Siriuseeee4</h1>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <figure>
              <h1>Siriuseeee5</h1>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <figure>
              <h1>Siriuseeee6</h1>
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
                {/* <button>More Info</button> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <figure>
              <h1>Siriuseeee7</h1>
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
                {/* <button>More Info</button> */}
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
