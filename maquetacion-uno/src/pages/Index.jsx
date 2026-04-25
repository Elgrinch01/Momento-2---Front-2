import NavBarHeader from "../components/NavBarHeader";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <NavBarHeader />

      <main className="hero" aria-label="Presentacion principal">
        <div className="hero-content">
          <h1>
            El arte de la <br /> paciencia
          </h1>

          <p>
            Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio
            para reconectar con la naturaleza.
          </p>

          <button className="btn-primary" onClick={() => navigate("/reservas")}>
            Reserva un taller
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}