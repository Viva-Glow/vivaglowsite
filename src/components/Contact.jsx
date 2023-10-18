import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div className="bodyContact pt-3 containerContact">
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3">
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
                    className="whatB"
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
                <div class="sec2contactform">
                  <h3 class="">¡Déjanos tu consulta!</h3>
                  <hr class="divider" />
                  <form action="">
                    <div class="clearfix">
                      <input
                        class="col first"
                        type="text"
                        placeholder="Nombre y apellido"
                      />
                    </div>
                    <div class="clearfix">
                      <input
                        class="col2 first"
                        type="Email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="clearfix pb-3">
                      <textarea name="textarea" id="" cols="30" rows="7">
                        Tu mensaje aquí
                      </textarea>
                    </div>
                    <label
                      class="button bWh btnSend"
                      aria-hidden="true"
                      type="submit"
                      value="Send"
                    >
                      Enviar
                    </label>
                    
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
