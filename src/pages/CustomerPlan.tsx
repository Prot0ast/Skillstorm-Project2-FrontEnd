import React from "react";
import { CustomerPlan } from "../types";
import { getAllCustomerPlans } from "../services/planService"
import { CustomerPlanTableRow } from "../components/CustomerPlanTableRow";

export function CustomerPlans(){
    const [customerPlans, setCustomerPlans] = React.useState(new Array<CustomerPlan>());

    React.useEffect(() => {
        getAllCustomerPlans().then(response => {
            setCustomerPlans(response.data)
        });
    }, [setCustomerPlans])

    return (
        <>
        <div className="container">
            <h2>Customer Plan</h2>
            <table className="table table-responsive table-striped table hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Plans: </th>
                    </tr>
                </thead>
                <tbody>
                    {customerPlans.map((customerPlans) => (<CustomerPlanTableRow key={customerPlans.id} customerPlan = {customerPlans} />))}
                </tbody>
            </table>
        </div>
        </>
    )
}