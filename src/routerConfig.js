import React from "react";
import { Devices, Main } from "./pages";

export const routes = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/equipos",
        element: <Devices />
    },
]