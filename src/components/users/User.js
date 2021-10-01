import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    fullname: "",
    email: "",
    password: "",
    state: "",
    country: "",
    address: "",
    address1: "",
    address2: "",
    vendor_number: "",
    vendor_code: "",
    sales_person: "",
    schema: "",
    supplier_category: "",
    ssitype: "",
    vendor_roles: "",
    vendor_gst: "",
    vendor_currency: "",
    vendor_type: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-100">
        <li className="list-group-item">name: {user.fname}</li>
        <li className="list-group-item">user name: {user.lname}</li>
        <li className="list-group-item">email: {user.fullname}</li>
        <li className="list-group-item">phone: {user.email}</li>
        <li className="list-group-item">password: {user.password}</li>
        <li className="list-group-item">state: {user.state}</li>
        <li className="list-group-item">country: {user.country}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">address1: {user.address1}</li>
        <li className="list-group-item">address2: {user.address2}</li>
        <li className="list-group-item">vendor_number: {user.vendor_number}</li>
        <li className="list-group-item">vendor_code: {user.vendor_code}</li>
        <li className="list-group-item">sales_person: {user.sales_person}</li>
        <li className="list-group-item">schema: {user.schema}</li>
        <li className="list-group-item">supplier_category: {user.supplier_category}</li>
        <li className="list-group-item">ssitype: {user.ssitype}</li>
        <li className="list-group-item">vendor_roles: {user.vendor_roles}</li>
        <li className="list-group-item">vendor_gst: {user.vendor_gst}</li>
        <li className="list-group-item">vendor_currency: {user.vendor_currency}</li>
        <li className="list-group-item">vendor_type: {user.vendor_type}</li>
      </ul>
    </div>
  );
};

export default User;
