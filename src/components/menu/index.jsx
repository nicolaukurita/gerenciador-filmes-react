import "./style.css"
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">Home</Link>
                <Link to="/films" className="menu">Filmes</Link>
                <Link to="/directors" className="menu">Diretores</Link>
                <Link to="/actors" className="menu">Atores</Link>
            </nav>
        </div>
    );
}