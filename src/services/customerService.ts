import axios from "axios";
import { Customer } from "../types";

export const http = axios.create({
  baseURL: "https://localhost:5001/api",
  headers: {
    "Content-type": "application/json",
  },
});

const getCustomerById = async (id: string) => {
  return await http.get<Customer>("/customer/${id}");
};

export { getCustomerById };
