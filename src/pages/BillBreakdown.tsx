import React from 'react';
import { Footer, Header } from "../components";
import { useParams } from "react-router-dom";
import { getCustomerPlansById } from '../services/planService';
import { Customer, Plan } from '../types';

export function BillBreakdown() {
    const [plan, setPlan] = React.useState(new Array<Plan>);

    const {customerId} = useParams();

    React.useEffect(() => {
        if (!customerId) {
          return;
        }
        getCustomerPlansById(customerId).then((response) => {
            setPlan(response.data);
        });
        },[setPlan, customerId]);
    
    // TODO: get an array of the customer's prices from their plans and apply the reduce function on it. Return that to the display
    
    return(
        <>
            <div>
            <Header />
                <h2>Monthly Bill Breakdown</h2>
                <tbody>
                    {/* {plan.map((plan)=> (< key={plan.price} plan={plan} />))} */}
                </tbody>
            </div>
            <Footer />
        </>
    );
}