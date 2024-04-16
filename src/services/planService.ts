import axios from "axios";
import { Plan } from "../types";

export const http = axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/"
    },
  });

const getCustomerPlansById = async (id: string) =>{
    return await http.get<Array<Plan>>(`/CustomerPlan/${id}`);
};

export { getCustomerPlansById};

