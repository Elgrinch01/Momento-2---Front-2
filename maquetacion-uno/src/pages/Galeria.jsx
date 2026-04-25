import NavBarHeader from "../components/NavBarHeader";
import Footer from "../components/Footer";
import CollectionCard from "../components/CollectionCard";

const collection = [
  "Arce Japonés",
  "Pino Negro",
  "Ficus Retusa",
  "Olmo Chino",
  "Enebro",
  "Azalea",
];

export default function Galeria() {
  return (
    <div className="gallery-page">
      <NavBarHeader />

      <main className="gallery-main">
        <section className="gallery-hero">
          <h1 className="gallery-title">Nuestra Colección</h1>
          <p className="gallery-description">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta
            una historia de tiempo y paciencia.
          </p>
        </section>

        <section className="gallery-grid" aria-label="Colección de bonsáis">
          {collection.map((title) => (
            <CollectionCard key={title} title={title} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}