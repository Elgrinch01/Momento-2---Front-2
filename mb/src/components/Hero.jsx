import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="contenido">
        <h1>
          Potencia <span>Gamer</span> de Alto Nivel
        </h1>

        <p>
          Equipos, accesorios y tecnología de las mejores marcas para llevar tu
          experiencia al siguiente nivel.
        </p>

        <div className="buttons">
          <button className="primary">Ver Productos</button>
          <button className="secondary">Explorar</button>
        </div>
      </div>
    </section>
  );
}