import NavBarHeader from "../components/NavBarHeader";
import Footer from "../components/Footer";

export default function Filosofia() {
  return (
    <div className="philosophy-page">
      <NavBarHeader />

      <main className="philosophy-main">
        <section className="philosophy-panel">
          <h1 className="philosophy-title">Menos es más</h1>

          <div className="philosophy-text">
            <p>
              Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
              Creemos que cultivar un bonsái no es solo jardinería, sino una meditación activa.
            </p>

            <p>
              En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y
              cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la
              intervención humana y la expresión salvaje de la naturaleza.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}