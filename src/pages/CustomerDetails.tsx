/* eslint-disable no-unused-expressions */
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../services/customerService";
import { Footer, Header } from "../components";
import './Page.css';

export function CustomerDetails() {
  const [customer, setCustomer] = useState({
    id: "",
    fullName: "",
    email: "",
  });

  const { customerId } = useParams();

  useEffect(() => {
    if (!customerId) {
      return;
    }
    getCustomerById(customerId).then((response) => {
      setCustomer(response.data);
    });
  }, [setCustomer, customerId]);

  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
    </head>
    <div>
      <Header />
      <h2 className="centerText">Customer Details</h2>
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
            {/* <tbody id="data-output">
                
            </tbody> */}
            </table>
      <Footer />
    </div>
    </>
  );
}
