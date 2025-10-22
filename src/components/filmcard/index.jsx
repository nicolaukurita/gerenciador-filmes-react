import "./style.css";

export function FilmCard({ title, director, year }) {
    return (
        <div className="film-card">
            <h2 className="film-title">{title}</h2>
            <p className="film-director">Directed by: {director}</p>
            <p className="film-year">Released in: {year}</p>
        </div>
    );
}