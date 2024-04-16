import axios from "axios";
import { Customer } from "../types";

export const http = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-type": "application/json",
  },
});

const getAllCustomers = async () => {
  return await http.get<Array<Customer>>('/Customer');
};

const getCustomerById = async (id: string) => {
  return await http.get<Customer>(`/Customer/${id}`);
};

export { getCustomerById , getAllCustomers};
