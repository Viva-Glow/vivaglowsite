import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CourseStar from "./pages/CourseStar";


import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso_estetica_avanzada" element={<CourseStar />} />
      <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;