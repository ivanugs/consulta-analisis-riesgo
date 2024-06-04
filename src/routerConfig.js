import React from "react";
import { DeviceDetail, Devices, Main } from "./pages";


export const routes = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/devices",
        element: <Devices />
    },
    {
        path: "/devices/:id",
        element: <DeviceDetail />
    },
]