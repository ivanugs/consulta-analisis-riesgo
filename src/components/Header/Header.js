import logo from "../../img/logo.png";
import './Header.css';


function Header () {
    return (
        <header className="header__section">
            <img className="header__logo" src={logo} alt="Logo" />
            <h1 className="header__title">Safety Scan</h1>
        </header>
    );
}

export default Header;
