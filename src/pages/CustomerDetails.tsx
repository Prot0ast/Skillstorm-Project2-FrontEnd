/* eslint-disable no-unused-expressions */
import React from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../services/customerService";
import { Footer, Header } from "../components";

export function CustomerDetails() {
  const [customer, setCustomer] = React.useState({
    id: "",
    fullName: "",
    email: "",
  });

  const { customerId } = useParams();

  React.useEffect(() => {
    if (!customerId) {
      return;
    }
    getCustomerById(customerId).then((response) => {
      setCustomer(response.data);
    });
  }, [setCustomer, customerId]);

  return (
    <div>
      <Header />
      <h2>Customer Details</h2>
      <dl>
        <dt>ID</dt>
        <dd>{customer.id}</dd>
        <dt>Full Name</dt>
        <dd>{customer.fullName}</dd>
        <dt>Email</dt>
        <dd>{customer.email}</dd>
      </dl>
      <Footer />
    </div>
  );
}
