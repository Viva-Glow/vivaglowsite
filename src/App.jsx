import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CourseStar from "./pages/CourseStar";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";

import "./App.css";
import NotFound from "./pages/NotFound";


function App() {
  
 
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
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
