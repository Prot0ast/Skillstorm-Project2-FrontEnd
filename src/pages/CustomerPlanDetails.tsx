import React from "react";
import { useParams } from "react-router-dom";
import { getCustomerPlansById } from "../services/planService";
import { CustomerPlan } from "../types";

export function CustomerPlanDetails(){
    const[customerPlan, setCustomerPlan] = React.useState(new Array<CustomerPlan>());

    const{customerId} = useParams();

    React.useEffect(() => {
        if(!customerId){
            return;
        }

        getCustomerPlansById(customerPlan.id).then(response =>{
            setCustomerPlan(response.data)
    });
    }, [setCustomerPlan, customerId])

    return(
        <div>
            <h2>Customer Plan Details</h2>
            <dl>
                <dt>ID</dt>
                <dd>{customerPlan.id}</dd>
                <dt>Plans: </dt>
                <dd>{customerPlan.plans}</dd>
            </dl>
        </div>
    )

}