import axios from "axios";
import { CustomerPlan, Plan } from "../types";

export const http = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-type': 'application/json',

    },
});

    const getAllPlans = async() => {
        return await http.get<Array<Plan>>('/plan');
    }

    const getPlanById = async(id: string) => {
        return await http.get<Plan>(`plan/${id}`)
    }

    const getAllCustomerPlans = async() => {
        return await http.get<Array<CustomerPlan>>('/customerPlan');
    }

    const getCustomerPlansById = async(id: string) => {
        return await http.get<Array<CustomerPlan>>(`/customerPlan/${id}`)
    }

    //const addCustomerPlan = async(id: string)

    const deleteCustomerPlan = async(id: string) => {
        
    }

    export{getAllPlans, getPlanById, getAllCustomerPlans, getCustomerPlansById, deleteCustomerPlan}