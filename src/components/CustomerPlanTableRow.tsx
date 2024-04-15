import React from "react";
import { CustomerPlan } from "../types";

interface CustomerPlanTableRowProps{
    customerPlan: CustomerPlan
}

export function CustomerPlanTableRow({customerPlan}: CustomerPlanTableRowProps): JSX.Element{
    let customerPlanLink = `/customerPlan/${customerPlan.id}`;


return(
    <tr>
        <td>{customerPlan.id}</td>
        <td>{customerPlan.plans}</td>
        <td><a className="btn btn-info" href={customerPlanLink}>Details</a></td>
    </tr>
)
}