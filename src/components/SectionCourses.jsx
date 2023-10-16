import React from "react";
import "../css/courses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SectionCourses = () => {
  return (
    <>
      {/* banner academy----------------- */}
      <div class="container text-center containerCoursesBanner p-2 ">
        <div class="row p-4">
          <div class="  tituloP">
            <h2>
              <strong>Cursos a tu alcance </strong>
            </h2>
          </div>
        </div>
        <div className="row pb-4">
          <button for="card1" class="button buttonCourses" aria-hidden="true">
            Quiero saber más
          </button>
        </div>
      </div>

      {/* academy---------------------- */}
      <div class="container text-center containerCourses">
        {/* Title clinic------------ */}
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3">
            <h2>Academia de formacion profesional</h2>
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
      </div>

      {/* CARDS ---------------- */}

      <div class="wrapperC">
      <div class="card cardCuorses">
          <input type="checkbox" id="card1" class="more" />
          <div class="content">
            <div class="front front1">
              <div class="inner">
                <h2>Curso 1</h2>
             
                <label for="card1" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                
                
             
              
                <div class="description">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem unde ea voluptas fuga odio vel veniam eveniet,
                    explicabo autem earum?
                  </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo vero voluptatibus esse ea quibusdam assumenda. Tenetur minus temporibus quisquam.</p>
                </div>
                <div class="location">Curso 1</div>
                <div class="price">42€ / day</div>
                <label for="card1" class="button return" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
       

        <div class="card cardCuorses">
          <input type="checkbox" id="card2" class="more" />
          <div class="content">
            <div class="front front2">
              <div class="inner">
                <h2>Curso 2</h2>
        
                <label for="card2" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
               
                <div class="description">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem unde ea voluptas fuga odio vel veniam eveniet,
                    explicabo autem earum?
                  </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur voluptatem possimus vero nulla, fugiat consequuntur sint sunt dicta saepe?</p>
                </div>
                <div class="location">Curso 2</div>
                <div class="price">42€ / day</div>
                <label for="card2" class="button return" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="card cardCuorses">
          <input type="checkbox" id="card3" class="more" />
          <div class="content">
            <div class="front front3">
              <div class="inner">
                <h2>Curso 3</h2>
               
                <label for="card3" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa libero totam nostrum consequatur autem quae provident
                    quos alias fugit maxime nisi labore, temporibus tempore illo
                    natus voluptates aliquam ipsum officia quasi placeat aut
                    facilis laudantium nam!
                  </p>
                  <p>
                    Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                    repudiandae aspernatur explicabo numquam! Tenetur!
                  </p>
                </div>
                <div class="location">Curso 3</div>
                <div class="price">60€ / day</div>
                <label for="card3" class="button return" aria-hidden="true">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* 
        card 4----------------------------- */}
        <div class="card cardCuorses">
          <input type="checkbox" id="card4" class="more" />
          <div class="content">
            <div class="front front4">
              <div class="inner">
                <h2>Curso 4</h2>
              
                <label for="card4" class="button" aria-hidden="true">
                  Details
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
              
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa libero totam nostrum consequatur autem quae provident
                    quos alias fugit maxime nisi labore, temporibus tempore illo
                    natus voluptates aliquam ipsum officia quasi placeat aut
                    facilis laudantium nam!
                  </p>
                  <p>
                    Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                    repudiandae aspernatur explicabo numquam! Tenetur!
                  </p>
                </div>
                <div class="location">Cracow, Poland</div>
                <div class="price">60€ / day</div>
                <label for="card4" class="button return" aria-hidden="true">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* end card 4 ----------------- */}
      </div>
      {/* academy---------------------- */}
    </>
  );
};

export default SectionCourses;
