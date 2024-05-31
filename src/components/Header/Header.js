import logo from "../../img/logo_continental.png";
import './Header.css';


function Header () {
    return (
        <header className="header__section">
            <img className="header__logo" src={logo} alt="Logo Continental" />
            <h1 className="header__title">Analisis de Riesgo de Maquinaria y Equipo</h1>
        </header>
    );
}

export default Header;