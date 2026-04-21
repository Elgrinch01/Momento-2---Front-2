import "../styles/Header.css";
export default function Header()
{
    return(
        <header className="header">
            <div>
                <nav className="nav">
                    <div className="contenedortitulo">
                        <span className="titulo">Store CESDE</span>
                    </div>
              
                    <ul className="enlaces">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Catálogo</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                    <button type="button" className="comprar">Comprar</button>
            </nav>
            </div>
        </header>
    )
}