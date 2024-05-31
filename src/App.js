import './App.css';
import './Reset.css';
import qr_icon from "./images/main_icons/qr.png";
import scan_icon from "./images/main_icons/scan.png";
import identify_icon from "./images/main_icons/identify.png";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="main__section">
        <section className="main__content">
          <div className="main__header">
            <h1 className="main__title">Consulta el analisis de riesgo de los equipos que utilizas</h1>
            <h2 className="main__subtitle">¡En tan solo 3 sencillos pasos!</h2>
          </div>
          <div className="main__context">
            <div className="main__container__steps">
              <div className='main__steps'>
                <p><span>1.</span> Identifica el equipo que estes operando o vayas a operar.</p>
                <img className='steps__icon' src={identify_icon} alt='Icono identificar' />
              </div>
              <div className='main__steps'>
                <p><span>2.</span> Localiza el codigo QR que se encuentra en el equipo.</p>
                <img className='steps__icon' src={qr_icon} alt='Icono codigo qr' />
              </div>
              <div className='main__steps'>
                <p><span>3.</span> Escanea usando la camara de tu celular.</p>
                <img className='steps__icon' src={scan_icon} alt='Icono escanear' />
              </div>
            </div>
            <p className="main__subtitle">¡Y listo!</p>
          </div>
          <div className="main__aclarations">
            <p>Cualquier aclaracion o duda consulta a tu equipo de EHS local.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;