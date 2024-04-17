import React from "react";
import { Customer } from "../types";

interface CustomerTableRowProps {
  customer: Customer;
}

export function CustomerTableRow({
  customer,
}: CustomerTableRowProps): JSX.Element {
  let customerLink = `/customers/${customer.id}`;
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.fullName}</td>
      <td>{customer.email}</td>
      <td>
        <a className="btn btn-info" href={customerLink}>
          Info
        </a>
      </td>
    </tr>
  );
}
