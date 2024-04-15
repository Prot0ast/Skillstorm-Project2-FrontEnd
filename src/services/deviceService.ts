import axios from "axios";
import { Device } from "../types";

export const http = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': true,
    },
});

const getAllDevices = async() => {
    return await http.get<Array<Device>>('/Device');
}

const getDeviceById = async (id: string) => {
    return await http.get<Device>(`/Device/${id}`)
};

export {getDeviceById, getAllDevices}