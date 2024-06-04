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
        <main className='main__section-deviceDetail'>
            <div className='general__information'>
                <h2 className="fancy">Información General</h2>
                <p><span>Detalles del equipo</span> {informacionGeneral.nombreDelEquipo}</p>
                <p><span>Área:</span> {informacionGeneral.area}</p>
                <p><span>Proceso:</span> {informacionGeneral.proceso}</p>
                <p><span>Operación específica:</span> {informacionGeneral.operacionEspecifica}</p>
                <p><span>Último mantenimiento:</span> {informacionGeneral.ultimoMantenimiento}</p>
                <p><span>Cantidad de operarios:</span> {informacionGeneral.cantidadOperarios}</p>
            </div>
            
            {paroDeEmergencia.tieneParoDeEmergencia !== "no aplica" && (
                <div className='paro__emergencia'>
                    <h2 className='fancy'>Paro de Emergencia</h2>
                    <p><span>Tiene Paro de Emergencia:</span> {paroDeEmergencia.tieneParoDeEmergencia}</p>
                    {paroDeEmergencia.tieneParoDeEmergencia !== "no" && <p><span>Es Accesible:</span> {paroDeEmergencia.esAccesible}</p>}
                    {paroDeEmergencia.tieneParoDeEmergencia !== "no" && <p><span>Es color rojo y esta en español:</span> {paroDeEmergencia.colorYIdioma}</p>}
                </div>
            )}

            {guardasDeSeguridad.necesitaGuardas !== "no aplica" && (
                <div className='guardas__seguridad'>
                    <h2 className='fancy'>Guardas de Seguridad</h2>
                    <p><span>Necesita Guardas:</span> {guardasDeSeguridad.necesitaGuardas}</p>
                    {guardasDeSeguridad.tipoDeGuarda !== "no aplica" && <p><span>Tipo de Guarda:</span> {guardasDeSeguridad.tipoDeGuarda}</p>}
                </div>
            )}

            <div className='safety__devices'>
                <h2 className='fancy'>Dispositivos de Seguridad</h2>
                <p><span>Tipo de Dispositivo:</span> {dispositivosDeSeguridad.tipoDeDispositivo}</p>
                <p><span>Función del Dispositivo:</span> {dispositivosDeSeguridad.funcionDelDispositivo}</p>
            </div>

            {riesgosPotenciales.tienePartesEnMovimiento !== "no aplica" && (
                <div className='potential__risks'>
                    <h2 className='fancy'>Riesgos Potenciales</h2>
                    <p><span>Partes en Movimiento:</span> {riesgosPotenciales.tienePartesEnMovimiento}</p>
                    <p><span>Tipos de Movimientos:</span> {riesgosPotenciales.tiposDeMovimientos}</p>
                    <p><span>Genera Calor:</span> {riesgosPotenciales.generaCalor}</p>
                    <p><span>Temperatura Máxima:</span> {riesgosPotenciales.temperaturaMaxima}</p>
                    <p><span>Genera Electricidad Estática:</span> {riesgosPotenciales.generaElectricidadEstatica}</p>
                    {riesgosPotenciales.descargaATierra !== "no aplica" && <p>Descarga a Tierra: {riesgosPotenciales.descargaATierra}</p>}
                    <p><span>Tiene Partes Cortantes:</span> {riesgosPotenciales.tienePartesCortantes}</p>
                    <p><span>Descripción del Riesgo:</span> {riesgosPotenciales.descripcionDelRiesgo}</p>
                </div>
            )}

            {materiasPrimasYProductos.tieneSuperficiesCortantes !== "no aplica" && (
                <div className='materias__primas'>
                    <h2 className='fancy'>Materias Primas, Producto y Subproductos</h2>
                    <p>Superficies Cortantes: {materiasPrimasYProductos.tieneSuperficiesCortantes}</p>
                    <p>Descripción del Riesgo: {materiasPrimasYProductos.descripcionRiesgoCortantes}</p>
                    <p>Proyección de Partículas: {materiasPrimasYProductos.tieneProyeccionDeParticulas}</p>
                    <p>Descripción del Riesgo: {materiasPrimasYProductos.descripcionRiesgoProyeccion}</p>
                    <p>Superficie Caliente: {materiasPrimasYProductos.tieneSuperficieCaliente}</p>
                    <p>Temperatura y Descripción del Riesgo: {materiasPrimasYProductos.temperaturaYDescripcionRiesgoTemperatura}</p>
                    <p>Otros Riesgos: {materiasPrimasYProductos.otrosRiesgos.join(', ')}</p>
                </div>
            )}

            <div className='risks__clasification'>
                <h2 className='fancy'>Determinación de Riesgos</h2>
                <p>Tipo de Daño: {determinacionDeRiesgos.tiposDeDano.join(', ')}</p>
                <p>Localización del Daño: {determinacionDeRiesgos.localizacionDelDano.join(', ')}</p>
                <p>Nivel de Deficiencia: {determinacionDeRiesgos.nivelDeDeficiencia.join(', ')}</p>
                <p>Nivel de Exposición: {determinacionDeRiesgos.nivelDeExposicion.join(', ')}</p>
                <p>Nivel de Probabilidad: {determinacionDeRiesgos.nivelDeProbabilidad.join(', ')}</p>
                <p>Nivel de Consecuencia: {determinacionDeRiesgos.nivelDeConsecuencia.join(', ')}</p>
                <p>Nivel de Riesgo: {determinacionDeRiesgos.nivelDeRiesgo.join(', ')}</p>
                <p>Nivel de Intervención: {determinacionDeRiesgos.nivelDeIntervencion.join(', ')}</p>
            </div>

            <div className='use__epp'>
                <h2 className='fancy'>Uso de Equipo de Protección Personal</h2>
                <p>Equipos de Protección Personal: {usoDeEPP.equiposDeProteccionPersonal.join(', ')}</p>
            </div>
        </main>
    );
};

export default DeviceDetail;
