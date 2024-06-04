import React, { useState, useEffect } from 'react';
import arrow from "../../img/device_icons/arrow.svg";
import "./Devices.css";
import { Link } from 'react-router-dom';

const Devices = () => {
  const [equipos, setEquipos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const equiposPerPage = 10; // Define cuántos equipos mostrar por página

  useEffect(() => {
    fetch("/database/db.json")
      .then(response => response.json())
      .then(data => {
        setEquipos(data.equipos);
        console.log(data);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  // Calcular los equipos a mostrar en la página actual
  const indexOfLastEquipo = currentPage * equiposPerPage;
  const indexOfFirstEquipo = indexOfLastEquipo - equiposPerPage;
  const currentEquipos = equipos.slice(indexOfFirstEquipo, indexOfLastEquipo);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className='main__section-devices'>
      <h1 className='page_title'>Listado de equipos</h1>
      <div className="card__container">
        {currentEquipos.map((equipo, index) => (
          <div key={index} className="card">
            <h2 className='card__title'>{equipo.informacionGeneral.nombreDelEquipo}</h2>
            <Link to={`/devices/${equipo.id}`}>
              <img className='card__icon' src={arrow} alt='Arrow Icon' />
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Link to={`/`}>
          <button>
            <img className='icon__back' src={arrow} alt='Arrow Icon' />
          </button>
        </Link>
        {Array.from({ length: Math.ceil(equipos.length / equiposPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Devices;


/* https://uiverse.io/aadium/mighty-dog-12 */