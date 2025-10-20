import "./style.css"
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">Home</Link>
                <Link to="/" className="menu">Filmes</Link>
                <Link to="/" className="menu">Diretores</Link>
                <Link to="/" className="menu">Atores</Link>
            </nav>
        </div>
    );
}