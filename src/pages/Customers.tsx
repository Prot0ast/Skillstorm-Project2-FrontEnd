import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, CustomerTableRow } from "../components";
import {getAllCustomers } from '../services/customerService';
import { Customer, Plan } from "../types";
import './Page.css';

export function Customers(){
    fetch("https://localhost:5001/api/Customer").then(function(response){
        return response.json();
    }).then(function(customers){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let customer of customers){
            out += `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.fullName}</td>
                <td>${customer.email}</td>
                <td>${customer.plans}</td>
                <td><a className='btn btn-info' href="/Customers/CustomerId">View</a></td>
            </tr>
            `;
        }
        placeholder!.innerHTML = out;
    })

    return (
        <>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <Header />
        <div className = "container">
            <h2 className="centerText">Customers</h2>
            <a className="btn-btn-primary btn-lg" href="/">Home</a>
            <table className = 'table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Plans</th>
                    </tr>
                </thead>
            <tbody id="data-output">
                
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}