import { Link } from "react-router-dom";

export default function BrandLogo() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <h2 className="logo">ZENITH BONSAI</h2>
    </Link>
  );
}