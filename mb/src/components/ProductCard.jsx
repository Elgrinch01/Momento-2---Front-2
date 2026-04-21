import "../styles/Card.css";

export default function ProductCard({ name, price, image }) {
  return (
    <div className="card">
        <div className="img-container">
            <img src={image} alt={name} className="img" />
        </div>

        <h3>{name}</h3>

        <p>
            {price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            })}
        </p>

        <button>Comprar</button>
    </div>
  );
}