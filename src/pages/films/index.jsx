import { FilmCard } from "../../components/filmcard";
import "./style.css"

export function Films() {
    return (
        <div className="content">
            <h1>FILMES</h1>
            <div className="cards">
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
                {FilmCard({ title: "O Poderoso Chefão", director: "Francis Ford Coppola", year: 1972 })}
            </div>
        </div>
    );
}