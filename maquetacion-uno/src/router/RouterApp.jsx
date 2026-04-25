import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
import Reservas from "../pages/Reservas";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}