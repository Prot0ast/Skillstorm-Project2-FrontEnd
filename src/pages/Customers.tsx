import React from "react";
import { Footer, Header, CustomerTableRow } from "../components";
import {getAllCustomers } from '../services/customerService';
import { Customer, Plan } from "../types";
import './Page.css';

export function Customers(){
    const [customers, setCustomers] = React.useState(new Array<Customer>);

    let newCustomer = {id: "", fullName: "", email: "", plans: ["","", "", 0, 0]} // TODO: Add Plans once implemented

    React.useEffect(() => {
        getAllCustomers().then(response => {
            setCustomers(response.data)
        });
    }, [setCustomers]);

    return (
        <>
        <Header />
        <div className = "container">
            <h2 className="centerText">Customers</h2>
            <table className = 'table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Plans</th>
                    </tr>
                </thead>
            <tbody>
                {customers.map((customer) => (<CustomerTableRow key={customer.id} customer={customer} />))}
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}