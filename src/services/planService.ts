import axios from "axios";
import { Plan } from "../types";

export const http = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-type': 'application/json',

    },
});

