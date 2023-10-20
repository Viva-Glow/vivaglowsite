import React, { useState }  from "react";
import emailjs from '@emailjs/browser';
import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// npm i @emailjs/browser 

const Result = () => {
  return <p>Mensaje enviado</p>;
};
function ContactComponent(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8u41qbz",
        "template_4flrfks",
        e.target,
        "CEW7CYQtis4Zr1wnl"
      )
      .then(
        (result) => {
          console.log(result.text);
           //alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 3000);
  return (
    <>
      <div className="bodyContact pt-3 containerContact">
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3 titleCO">
            <h2>Contáctanos</h2>
          </div>
        </div>
        <hr class="divider" />
        <p class="col-md-6 offset-md-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          quae iure ut odit accusantium similique delectus? Maiores quod sit
          quibusdam ut voluptatem, cum perspiciatis repudiandae ea incidunt,
          voluptates mollitia optio. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Hic, neque at. Molestiae vitae similique quaerat
          illo eum eos nemo sint?
        </p>
        <div class="container pt-4">
          <div class="innerwrap">
            <section class="section1 clearfix pb-4">
              <div class="textcenter">
                <a href=" https://api.whatsapp.com/send?phone=34663531305">
                  {" "}
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#2ea41e" }}
                    size="xl"
                    className="whatB pb-2"
                  />
                </a>
                <p>Directo a nuestro Whatsapp</p>
              </div>
            </section>

            <section class="section2 clearfix">
              <div class="col2 column1 first">
                <iframe
                  id="map_canvas"
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.56469944443!2d-0.526320039246598!3d39.407668984522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1694871377648!5m2!1ses!2ses"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="col2 column2 last">
                <div class="sec2innercont"></div>
                <div class="sec2contactform titleCO1">
                  <h3 class="">¡Déjanos tu consulta!</h3>
                  <hr class="divider" />
                  {/* -------------------FORM----------------- */}
                  <form action="" onSubmit={sendEmail} className="form">

                    <div class="clearfix">
                      <input
                        class="col first"
                        type="text"
                        placeholder="Nombre y apellido"
                        name="user_name"
                        className="effect-1 "
                        id="username"
                        required
                        pattern="^(?! )[A-Za-z\s]*$"
                        minLength="2"
                        maxLength="40"
                      />
                    </div>
                    <div class="clearfix">
                      <input
                        class="col2 first"
                        type="email"
                        name="email"
                        className="effect-1"
                        placeholder="Correo electrónico"
                        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                        maxLength="30"
                        required
                      />
                    </div>
                    <div class="clearfix pb-3">
                      <textarea  id="" cols="30" rows="7"
                          
                           name="message"
                           className="effect-1 "
                           placeholder="Mensaje"
                           required
                           maxLength="500"
                         
                           minLength="2"
                      />
                       
                     
                    </div>

                    <div  >
                    <input
                     class=" bWh whatCont"
                      aria-hidden="true"
                      type="submit"
                      value="Enviar"
                    />
                     
                    
                    </div>
                  
                    <div>{result ? <Result /> : null}</div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default  ContactComponent;
