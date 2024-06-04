import { useParams } from 'react-router-dom';
import "./DeviceDetail.css";
import { useEffect, useState } from 'react';

const DeviceDetail = () => {
    const [equipo, setEquipo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("/database/db.json")
            .then(response => response.json())
            .then(data => {
                const equipoEncontrado = data.equipos.find(equipo => equipo.id === parseInt(id));
                setEquipo(equipoEncontrado);
                console.log(data);
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }, [id]);

    if (!equipo) {
        return <div>Cargando...</div>;
    }

    const { informacionGeneral, paroDeEmergencia, guardasDeSeguridad, dispositivosDeSeguridad, riesgosPotenciales, materiasPrimasYProductos, determinacionDeRiesgos, usoDeEPP } = equipo;

    return (
        <div>
            <h1>Detalles del equipo {informacionGeneral.nombreDelEquipo}</h1>
            <p>Área: {informacionGeneral.area}</p>
            <p>Proceso: {informacionGeneral.proceso}</p>
            <p>Operación específica: {informacionGeneral.operacionEspecifica}</p>
            <p>Último mantenimiento: {informacionGeneral.ultimoMantenimiento}</p>
            <p>Cantidad de operarios: {informacionGeneral.cantidadOperarios}</p>
            
            {paroDeEmergencia.tieneParoDeEmergencia !== "no aplica" && (
                <div>
                    <h2>Paro de Emergencia</h2>
                    <p>Tiene Paro de Emergencia: {paroDeEmergencia.tieneParoDeEmergencia}</p>
                    {paroDeEmergencia.tieneParoDeEmergencia !== "no" && <p>Es Accesible: {paroDeEmergencia.esAccesible}</p>}
                    {paroDeEmergencia.tieneParoDeEmergencia !== "no" && <p>Color e Idioma: {paroDeEmergencia.colorYIdioma}</p>}
                </div>
            )}

            {guardasDeSeguridad.necesitaGuardas !== "no aplica" && (
                <div>
                    <h2>Guardas de Seguridad</h2>
                    <p>Necesita Guardas: {guardasDeSeguridad.necesitaGuardas}</p>
                    {guardasDeSeguridad.tipoDeGuarda !== "no aplica" && <p>Tipo de Guarda: {guardasDeSeguridad.tipoDeGuarda}</p>}
                </div>
            )}

            <div>
                <h2>Dispositivos de Seguridad</h2>
                <p>Tipo de Dispositivo: {dispositivosDeSeguridad.tipoDeDispositivo}</p>
                <p>Función del Dispositivo: {dispositivosDeSeguridad.funcionDelDispositivo}</p>
            </div>

            {riesgosPotenciales.tienePartesEnMovimiento !== "no aplica" && (
                <div>
                    <h2>Riesgos Potenciales</h2>
                    <p>Partes en Movimiento: {riesgosPotenciales.tienePartesEnMovimiento}</p>
                    <p>Tipos de Movimientos: {riesgosPotenciales.tiposDeMovimientos}</p>
                    <p>Genera Calor: {riesgosPotenciales.generaCalor}</p>
                    <p>Temperatura Máxima: {riesgosPotenciales.temperaturaMaxima}</p>
                    <p>Genera Electricidad Estática: {riesgosPotenciales.generaElectricidadEstatica}</p>
                    {riesgosPotenciales.descargaATierra !== "no aplica" && <p>Descarga a Tierra: {riesgosPotenciales.descargaATierra}</p>}
                    <p>Tiene Partes Cortantes: {riesgosPotenciales.tienePartesCortantes}</p>
                    <p>Descripción del Riesgo: {riesgosPotenciales.descripcionDelRiesgo}</p>
                </div>
            )}

            {materiasPrimasYProductos.tieneSuperficiesCortantes !== "no aplica" && (
                <div>
                    <h2>Materias Primas, Producto y Subproductos</h2>
                    <p>Superficies Cortantes: {materiasPrimasYProductos.tieneSuperficiesCortantes}</p>
                    <p>Descripción del Riesgo: {materiasPrimasYProductos.descripcionRiesgoCortantes}</p>
                    <p>Proyección de Partículas: {materiasPrimasYProductos.tieneProyeccionDeParticulas}</p>
                    <p>Descripción del Riesgo: {materiasPrimasYProductos.descripcionRiesgoProyeccion}</p>
                    <p>Superficie Caliente: {materiasPrimasYProductos.tieneSuperficieCaliente}</p>
                    <p>Temperatura y Descripción del Riesgo: {materiasPrimasYProductos.temperaturaYDescripcionRiesgoTemperatura}</p>
                    <p>Otros Riesgos: {materiasPrimasYProductos.otrosRiesgos.join(', ')}</p>
                </div>
            )}

            <div>
                <h2>Determinación de Riesgos</h2>
                <p>Tipo de Daño: {determinacionDeRiesgos.tiposDeDano.join(', ')}</p>
                <p>Localización del Daño: {determinacionDeRiesgos.localizacionDelDano.join(', ')}</p>
                <p>Nivel de Deficiencia: {determinacionDeRiesgos.nivelDeDeficiencia.join(', ')}</p>
                <p>Nivel de Exposición: {determinacionDeRiesgos.nivelDeExposicion.join(', ')}</p>
                <p>Nivel de Probabilidad: {determinacionDeRiesgos.nivelDeProbabilidad.join(', ')}</p>
                <p>Nivel de Consecuencia: {determinacionDeRiesgos.nivelDeConsecuencia.join(', ')}</p>
                <p>Nivel de Riesgo: {determinacionDeRiesgos.nivelDeRiesgo.join(', ')}</p>
                <p>Nivel de Intervención: {determinacionDeRiesgos.nivelDeIntervencion.join(', ')}</p>
            </div>

            <div>
                <h2>Uso de Equipo de Protección Personal</h2>
                <p>Equipos de Protección Personal: {usoDeEPP.equiposDeProteccionPersonal.join(', ')}</p>
            </div>
        </div>
    );
};

export default DeviceDetail;
