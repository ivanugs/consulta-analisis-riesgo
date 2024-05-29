async function fetchEquipos() {
    try {
        const response = await fetch('../db.json');
        const data = await response.json();

        const urlParams = new URLSearchParams(window.location.search);
        const equipoId = urlParams.get('id');

        // Acceder a la lista de equipos
        const equipos = data.equipos;

        // Imprimir información de cada equipo
        equipos.forEach((equipo, index) => {
            console.log(`Equipo ${index + 1}:`);
            console.log(`Nombre: ${equipo.informacionGeneral.nombreDelEquipo}`);
            console.log(`Área: ${equipo.informacionGeneral.area}`);
            console.log(`Proceso: ${equipo.informacionGeneral.proceso}`);
            console.log(`Operación específica: ${equipo.informacionGeneral.operacionEspecifica}`);
            console.log(`Último mantenimiento: ${equipo.informacionGeneral.ultimoMantenimiento}`);
            console.log(`Número de operarios: ${equipo.informacionGeneral.cantidadOperarios}`);
            // Accede a otros datos de la misma manera
            console.log('---');
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

  // Llamar a la función para obtener los datos
  fetchEquipos();