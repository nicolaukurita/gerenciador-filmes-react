import "./style.css"
import { BsFilePlusFill as PlusIcon } from "react-icons/bs";
import { BsFileMinusFill as MinusIcon } from "react-icons/bs";
import { useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

function decreaseCastSize(castSize, setCastSize) {
    if (castSize > 1) {
        setCastSize(castSize - 1);
    }
}
function createcastInputs(castSize, setCastSize) {

    var content = [];

    for (var i = 0; i < castSize; i++) {
        content.push(
            (
                <p className="home-form" key={i}>
                    <input className="home-form" type="text" size={40} name="actor" placeholder="Nome do ator" />
                    <MinusIcon size={25} className="home-form-icon" onClick={() => decreaseCastSize(castSize, setCastSize)} />
                    <PlusIcon size={25} className="home-form-icon" onClick={() => setCastSize(castSize + 1)} />
                </p>
            )
        )
    }
    return content;
}

function formDataToJsonMapper(film, director, grade, actors) {
    let newData = {
        nome: film,
        diretor: { nome: director },
        nota: grade,
        elenco: actors.map(actor => ({ nome: actor }))
    };

    return JSON.stringify(newData);
}

async function formHandle(event) {
    event.preventDefault();

    const film = event.target.film.value;
    const director = event.target.director.value;
    const grade = event.target.grade.value;

    const actors = Array.from(event.target.actor).map(actor => actor.value);

    console.log({ film, director, grade, actors });
    const jsonData = formDataToJsonMapper(film, director, grade, actors);

    const axiosConfig = { headers: { 'Content-Type': 'application/json' } };
    axios.post(BACKEND_URL + "/filmes", jsonData, axiosConfig);
}

export function Home() {

    const [castSize, setCastSize] = useState(1);

    return (
        <div className="content">
            <h1>Home</h1>
            <div className="home-form">
                <form onSubmit={async (e) => await formHandle(e)}>
                    <h3 className="home-form">Inserir novo filme:</h3>
                    <p className="home-form"><input className="home-form" type="text" size={40} name="film" placeholder="Nome do Filme" /></p>
                    <p className="home-form"><input className="home-form" type="text" size={40} name="director" placeholder="Diretor" /></p>
                    <p className="home-form"><input className="home-form" type="text" size={10} name="grade" placeholder="Nota" /></p>

                    <h3 className="home-form">Elenco:</h3>

                    {createcastInputs(castSize, setCastSize)}

                    <p className="home-form"><input type="submit" className="home-form-button" value="Cadastrar novo filme" /></p>
                </form>
            </div>
        </div>
    );
}