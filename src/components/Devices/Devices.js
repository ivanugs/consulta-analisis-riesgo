import React, { useState, useEffect } from 'react';
import "./Devices.css"

const Devices = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch("/database/db.json")
      .then(response => response.json())
      .then(data => {
        setEquipos(data.equipos);
        console.log(data);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  return (
    <main>
      <h1 className='page_title'>Listado de equipos</h1>
      <div className="card__container">
        {equipos.map((equipo, index) => (
          <div key={index} className="card">
            <h2>{equipo.informacionGeneral.nombreDelEquipo}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Devices;

/* https://uiverse.io/aadium/mighty-dog-12 */