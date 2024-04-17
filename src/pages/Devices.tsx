import React from "react"
export function Devices() {
    fetch("https://localhost:5001/api/Device")
    .then(function(response){
        return response.json();
    })
    .then(function(devices){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let device of devices){
            out += 
            `
            <tr>
                <td>${device.id}</td>
                <td>${device.custId}</td>
                <td>${device.name}</td>
                <td>${device.number}</td>
                <td><a className = 'btn btn-info' href="https://localhost:5001/api/Device/${device.id}">Details</a></td>
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
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Number</th>
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


