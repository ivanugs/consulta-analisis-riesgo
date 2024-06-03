import React from "react";
import Main from "./components/Main/Main";
import Devices from "./components/Devices/Devices";

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