import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DeviceDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detalles del equipo {id}</h1>
            {/* Muestra más detalles sobre el equipo aquí */}
        </div>
    );
};

export default DeviceDetail;
