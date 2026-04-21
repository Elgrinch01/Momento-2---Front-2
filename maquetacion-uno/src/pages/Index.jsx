import NavBarHeader from "../components/NavBarHeader";
import Footer from "../components/footer";
import "../index.css";

export default function Index() {
  return (
    <>
      <NavBarHeader />

      <section className="hero">
        <div className="hero-content">
          <h1>
            El arte de la <br /> paciencia
          </h1>

          <p>
            Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
            <br />
            Un espacio para reconectar con la naturaleza.
          </p>

          <button className="btn-primary">
            Reserva un taller
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}