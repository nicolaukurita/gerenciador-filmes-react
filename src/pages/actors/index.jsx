import "./style.css";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useEffect, useState } from "react";

function actorsHandler(data) {
    return data.map((actor) => (
        <div key={actor.id} className="actors-content">
            {actor.name}</div>
    ));
}

export function Actors() {

    const [actors, setActors] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/actors`)
            .then((response) => {
                console.log(response.data);
                setActors(actorsHandler(response.data));
            })
            .catch((error) => {
                console.error("There was an error fetching the actors!", error);
            }).finally(() => {
                console.log("Request completed");
            });
    }, []);

    useState();

    return (
        <div className="content">
            <h1>Atores</h1>
            {actors}
            <p><button onClick={() => setActors("cliquei no botao")}>Clique aqui!</button></p>
        </div>
    );
}
