import "./style.css"
import Logo from  "./imgs/logo.png"

export function Topbanner() {  
    return (
        <div className="topbanner">
            <img src={Logo} alt="Logo" className="topbanner"/>
            <center className="topbanner">Gerenciador de Filmes</center>
        </div>
    );
}