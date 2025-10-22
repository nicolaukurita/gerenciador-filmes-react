import "./style.css"

export function Home() {
    return (
        <div className="content">
            <h1>Home</h1>
            <div className="home-form">
                <h3 className="home-form">Inserir novo filme:</h3>
                <p className="home-form"><input className="home-form" type="text" size={40} placeholder="Nome do Filme"/></p>
                <p className="home-form"><input className="home-form" type="text" size={40} placeholder="Diretor"/></p>
                <p className="home-form"><input className="home-form" type="text" size={10} placeholder="Nota"/></p>

                <h3 className="home-form">Elenco:</h3>
                <p className="home-form"><input className="home-form" type="text" size={40} placeholder="Nome do ator"/></p>
            </div>
        </div>
    );
}