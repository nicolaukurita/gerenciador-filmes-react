import "./style.css"
import { BsFilePlusFill as PlusIcon } from "react-icons/bs";
import { BsFileMinusFill as MinusIcon } from "react-icons/bs";

export function Home() {
    return (
        <div className="content">
            <h1>Home</h1>
            <div className="home-form">
                <h3 className="home-form">Inserir novo filme:</h3>
                <p className="home-form"><input className="home-form" type="text" size={40} placeholder="Nome do Filme" /></p>
                <p className="home-form"><input className="home-form" type="text" size={40} placeholder="Diretor" /></p>
                <p className="home-form"><input className="home-form" type="text" size={10} placeholder="Nota" /></p>

                <h3 className="home-form">Elenco:</h3>
                <p className="home-form">
                    <div><input className="home-form" type="text" size={40} placeholder="Nome do ator" /></div>
                    <div><MinusIcon size={25} className="home-form-icon" /></div>
                    <div><PlusIcon size={25} className="home-form-icon" /></div>
                </p>

            </div>
        </div>
    );
}