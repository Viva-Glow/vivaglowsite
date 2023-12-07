import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseStar from "./pages/CourseStar";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";
import PoliticasCookies from "./pages/PoliticasCookies";
import "./App.css";
import NotFound from "./pages/NotFound";
import CookieConsent from "react-cookie-consent";
import "../src/css/banner.css";

function App() {
  const handleAccept = () => {
    console.log("Usuario ha aceptado las cookies esenciales");

    // function JUST for the banner HAS NO POINT
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365); // Caduca en un año
    document.cookie =
      "cookieEsencial1=valorEsencial1; expires=" +
      expirationDate.toUTCString() +
      "; path=/;";
    // document.cookie =
    //   "cookieEsencial2=valorEsencial2; expires=" +
    //   expirationDate.toUTCString() +
    //   "; path=/;";

    // continuar aqui
  };

  const handleDecline = () => {
    // console.log("Usuario ha rechazado las cookies");
   
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/curso-tecnicas-avanzadas-estetica"
            element={<CourseStar />}
          />
          <Route path="/aviso_legal" element={<AvisoLegal />} />
          <Route
            path="/politicas_de_privacidad"
            element={<PoliticasPrivacidad />}
          />
          <Route path="/politicas_de_cookies" element={<PoliticasCookies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <CookieConsent
        className="buttonA"
        // debug={true}
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        declineButtonStyle={{
          padding: "12px 32px",
          borderRadius: "4px",
          backgroundColor: "#d5d7da",
          outline: "none",
          border: "none",
          color: "#7c828d",
          fontSize: "14px",
          fontWeight: "500",
        }}
        cookieName="ConsentCookie"
        style={{ background: "#A8876C" }}
        buttonStyle={{
          padding: "12px 32px",
          borderRadius: "4px",
          backgroundColor: "#cdb88e",
          outline: "none",
          border: "1px solid transparent",
          color: "#4e503b",
          fontSize: "14px",
          fontWeight: "500",
        }}
        expires={150}
        acceptOnScroll={true}
        // disableStyles={true}
        onAccept={handleAccept}
        onDecline={handleDecline}
        enableDeclineButton
      >
        Utilizamos cookies propias y de terceros para obtener datos estadísticos
        de la navegación del sitio y mejorar nuestros servicios. Si acepta o
        continúa navegando, consideramos que acepta su uso. Puede cambiar la
        configuración u obtener más información aquí{" "}
        <a href="/politicas_de_cookies">Política de cookies</a>
      </CookieConsent>
    </>
  );
}

export default App;
