import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div className="body">
        <div class="container">
          <div class="innerwrap">
            <section class="section1 clearfix">
              <div class="textcenter">
                <span class="shtext">Contact Us</span>
                <span class="seperator"></span>
                <h1>Drop Us a Mail</h1>
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
                {/* <div class="sec2innercont">
                  <div class="sec2addr">
                    <p>
                      45 BC, a Latin professor at Hampden-Sydney College in
                      Virginia
                    </p>
                    <p>
                      <span class="collig">Phone :</span> +91 976885083
                    </p>
                    <p>
                      <span class="collig">Email :</span>{" "}
                      vivek.mengu016@gmail.com
                    </p>
                    <p>
                      <span class="collig">Fax :</span> +91 9768850839
                    </p>
                  </div>
                </div> */}
                <div class="sec2contactform">
                  <h3 class="sec2frmtitle">
                    Want to Know More?? Drop Us a Mail
                  </h3>
                  <form action="">
                    <div class="clearfix">
                      <input
                        class="col2 first"
                        type="text"
                        placeholder="FirstName"
                      />
                      <input
                        class="col2 last"
                        type="text"
                        placeholder="LastName"
                      />
                    </div>
                    <div class="clearfix">
                      <input
                        class="col2 first"
                        type="Email"
                        placeholder="Email"
                      />
                      <input
                        class="col2 last"
                        type="text"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div class="clearfix">
                      <textarea name="textarea" id="" cols="30" rows="7">
                        Your message here...
                      </textarea>
                    </div>
                    <div class="clearfix">
                      <input type="submit" value="Send" />
                    </div>
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
