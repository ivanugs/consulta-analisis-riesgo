import React from 'react'

fetch("/database/db.json")
  .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes trabajar con los datos de tu JSON
    })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

const Devices = () => {
  return (
    <main>
      
    </main>
  )
}

export default Devices