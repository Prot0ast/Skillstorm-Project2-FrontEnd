import React from "react";
import { Plan } from "../types";

interface PlanTableRowProps {
    plan: Plan;
}

export function PlanTableRow({
    plan,
}: PlanTableRowProps): JSX.Element {
    return(
        <tr>
            <td>{plan.id}</td>
            <td>{plan.name}</td>
            <td>{plan.price}</td>
            <td>{plan.deviceLimit}</td>
        </tr>
    );
}