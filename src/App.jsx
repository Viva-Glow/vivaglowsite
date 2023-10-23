import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "./routes/RoutesDos";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesDos />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;