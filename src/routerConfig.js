import React from "react";
import { Devices, Main } from "./pages";

export const routes = [
    {
        path: "/consulta-analisis-riesgo",
        element: <Main />
    },
    {
        path: "/consulta-analisis-riesgo/equipos",
        element: <Devices />
    },
]