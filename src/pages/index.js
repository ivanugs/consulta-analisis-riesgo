import Main from "../components/Main/Main";
import { lazy } from "react";

export { Main };

export const Devices = lazy(() => {return import("../components/Devices/Devices")});
export const DeviceDetail = lazy(() => {return import("../components/DeviceDetail/DeviceDetail")});