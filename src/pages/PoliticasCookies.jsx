import React from "react";
import Footer from "../components/Footer";

import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PoliticasCookies = () => {
  return (
    <>
      <div class="container text-center containerCourses" id='Slider'>
        {/* Title clinic------------ */}
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3 tituloPC1">
            <Fade>
              <h2>
                POLÍTICAS DE <strong>COOKIES</strong>{" "}
              </h2>
            </Fade>
          </div>
        </div>
        <hr class="divider " />
        <div class="row pt-3 mb-4 ">
          <div class="col-md-12  ancore textLegal">
            <p>
            ¿QUÉ SON LAS COOKIES?
            </p>
            <p>
            Las cookies son pequeñas unidades de datos que se almacenan temporalmente en tu ordenador o dispositivo móvil para mejorar tu experiencia en el sitio web. Las cookies no contienen ninguna información personal y no pueden utilizarte para identificar a un usuario individual. Una cookie suele incluir un identificador único, que es un número anónimo generado aleatoriamente y almacenado en su dispositivo. Algunas expiran al final de la sesión del sitio web, otras permanecen en su ordenador durante más tiempo. 
            </p>
            <p>
            COOKIES AFECTADAS POR LA NORMATIVA Y COOKIES EXCEPTUADAS
            </p>
            <p>
            Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.
            </p>
            <p>
            ¿QUÉ TIPOS DE COOKIES EXISTEN?
            </p>
            <p>
            • Cookies analíticas: recogen información del uso que se realiza del sitio web.
            </p>
            <p>
            •  Cookies sociales: son aquellas necesarias para redes sociales externas.
            </p>
            <p>
            • Cookies de publicidad y comportamentales: recogen información sobre las preferencias y elecciones personales del usuario.
            </p>
            <p>
            • Cookies técnicas y funcionales: son las estrictamente necesarias para el uso del sitio web y para la prestación del servicio contratado.
            </p>
            <p>
            COOKIES QUE SE UTILIZAN EN ESTE SITIO WEB
            </p>
            <p>
            • ConsentCookie: Gestiona el consentimiento del usuario para el uso de las cookies en la página web, con el objeto de recordar aquellos usuarios que las han aceptado y aquellos que no, de modo que a los primeros no se les muestre información en la parte inferior de la página al respecto. Según la tipología anterior se trata de una cookie propia, persistente y técnica. Caduca en 1 año desde la última actualización.
            </p>
            <p>
            • Google Search Console: utiliza cookies para realizar estadísticas de las páginas web y analizar el uso del sitio. Las cookies recogen información anónima sobre el tráfico del sitio web y dicha información no puede utilizarse para identificar a una persona, ni obtener datos de la misma.  
            </p>
           
   
            <p>
            Para obtener más información sobre las cookies de Google, haz clic <a href="https://policies.google.com/technologies/cookies?hl=es#types-of-cookies">aquí.</a>
            </p>
            <p>
            Para obtener más información sobre Google Search Console, haz clic <a href="https://search.google.com/search-console/about?hl=es">aquí.</a>
            </p>
            <p>
            ¿Cómo puedo bloquear o eliminar las cookies?
            </p>
            <p>
              
            No utilizamos cookies para recoger información personal de los usuarios de nuestro sitio web. Sin embargo, puede bloquear o eliminar nuestras cookies o las de terceros cambiando la configuración de su navegador. Para más información, consulte la sección de Ayuda" de su navegador. La mayoría de los navegadores aceptan automáticamente las cookies. Si no desea habilitar las cookies, es posible que tenga que eliminarlas o bloquearlas activamente. Para más información sobre el uso de cookies en los navegadores de los teléfonos móviles y sobre cómo bloquearlas o eliminarlas, consulte las instrucciones de uso de su teléfono móvil. Si no desea permitir el uso de cookies, puede seguir utilizando nuestro sitio web. Sin embargo, es posible que algunas funciones no funcionen adecuadamente.

            </p>
           
          </div>
        </div>
      </div>
      <div className="goBack">
        <a href="/" className="">
          {" "}
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#ffffff" }}
          />{" "}
          volver
        </a>
      </div>

      <Footer />
    </>
  );
};

export default PoliticasCookies;
