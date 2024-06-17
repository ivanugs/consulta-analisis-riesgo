import qr_icon from "../../img/main_icons/qr.png";
import scan_icon from "../../img/main_icons/scan.png";
import identify_icon from "../../img/main_icons/identify.png";
import './Main.css';
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main__section">
        <section className="main__content">
            <div className="main__header">
                <h1 className="main__title">Consulta el analisis de riesgo de maquinarias y herramientas que utilizas con Safety Scan</h1>
                <h2 className="main__subtitle">¡En tan solo 3 sencillos pasos!</h2>
            </div>
            <div className="main__context">
                <div className="main__container__steps">
                <div className='main__steps'>
                    <p><span>1.</span> Identifica la herramienta o maquinaria que estes por operar.</p>
                    <img className='steps__icon' src={identify_icon} alt='Icono identificar' />
                </div>
                <div className='main__steps'>
                    <p><span>2.</span> Localiza el codigo QR que se encuentra la maquinaria.</p>
                    <img className='steps__icon' src={qr_icon} alt='Icono codigo qr' />
                </div>
                <div className='main__steps'>
                    <p><span>3.</span> Escanea el QR usando la camara de tu celular.</p>
                    <img className='steps__icon' src={scan_icon} alt='Icono escanear' />
                </div>
                </div>
                <p className="main__subtitle">¡Y listo!</p>
                <Link className="main__link" to={`/devices`}>
                    <h2>Consultar listado de maquinarias y herraminetas</h2>
                </Link>
            </div>
            <div className="main__aclarations">
                <p>Cualquier aclaracion o duda consulta a tu equipo de EHS local.</p>
            </div>
        </section>
    </main>
  )
}

export default Main