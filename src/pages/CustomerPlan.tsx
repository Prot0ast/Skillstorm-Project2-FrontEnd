import React from "react";

export function CustomerPlans(){
    fetch("https://localhost:5001/api/CustomerPlan")
    .then(function(response){
        return response.json();
    })
    .then(function(custPlans){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let customerPlan of custPlans){
            out += `
            <tr>
                <td>${customerPlan.id}</td>
                <td>${customerPlan.plans}</td>
                <td><a className = 'btn btn-info' href="https://localhost:5001/api/CustomerPlan/${customerPlan.id}">Details</a></td>
            </tr>
            `;
        }
        placeholder!.innerHTML = out;
    })
   
    return(
        <>
        <div className="container">
            <h2>Devices</h2>
            <table className='table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>List of Plans</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="data-output">
                </tbody>
            </table>
        </div>
        
        </>
    )
}