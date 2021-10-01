import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

const options = [
  { value: 'vendor', label: 'Vendor' },
  { value: 'admin', label: 'Admin' },
  { value: 'client', label: 'Client' },
];

const AddUser = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const [isVisible, setIsVisible] = useState(false)

  const [adminisVisible, adminsetIsVisible] = useState(false)

  const handleDropdownChange = (e) => {
    console.log(e)
    setSelectedOption(e.value);
    if (e.value === "vendor"){
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
    if (e.value === "admin"){
      adminsetIsVisible(true)
    }
    else {
      adminsetIsVisible(false)
    }
  }

  useEffect(() => {
    return () => {
      console.log(selectedOption)
    }
  }, [selectedOption])


  let history = useHistory();
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

  const { fname, lname, fullname, password, email, state, country, address, address1, address2, vendor_number, vendor_code, sales_person, schema,
    supplier_category, ssitype, vendor_roles, vendor_gst, vendor_currency, vendor_type } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    setTimeout(() => {
      history.push("/");
    }, 5000)

    notify();
  };

  const notify = () => toast("User Succefully Added");

  return (
    <div className="container" style={{ marginBottom: '3%' }}>
      <h1 style={{ textAlign: 'center' }}>Select Role:</h1>
      <div className="col-md-6" style={{margin: 'auto'}}>
        <Select
          id="reason-list"
          defaultValue={selectedOption}
          onChange={handleDropdownChange}
          options={options}
        />
      </div>
      
      <form onSubmit={e => onSubmit(e)}>
        <div className="w-75 mx-auto shadow p-5" style={{ display: isVisible ? "block" : "none", marginTop: "1%" }}>
          <h2 className="text-center mb-4">Add A Vendor</h2>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="firstname">First Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="First Name"
                name="fname"
                required
                autocomplete="off"
                value={fname}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Last Name"
                name="lname"
                required
                autocomplete="off"
                value={lname}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="firstname">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Full Name"
                name="fullname"
                required
                autocomplete="off"
                value={fullname}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
                required
                autocomplete="off"
                value={password}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="password">E-mail</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="E-mail Address"
                name="email"
                required
                autocomplete="off"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="State">State</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="State"
                name="state"
                required
                autocomplete="off"
                value={state}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Country">Country</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Country"
                name="country"
                required
                autocomplete="off"
                value={country}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Address">Address</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Address"
                name="address"
                required
                autocomplete="off"
                value={address}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Country">Address 1</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Address 1"
                name="address1"
                required
                autocomplete="off"
                value={address1}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Address 2">Address 2</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Address 2"
                name="address2"
                required
                autocomplete="off"
                value={address2}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Vendor Number">Vendor Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor number"
                name="vendor_number"
                required
                autocomplete="off"
                value={vendor_number}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Vendor Code">Vendor Code</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor code"
                name="vendor_code"
                required
                autocomplete="off"
                value={vendor_code}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Sales Person">Sales Person</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="sales person"
                name="sales_person"
                required
                autocomplete="off"
                value={sales_person}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Schema">Schema</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="schema"
                name="schema"
                required
                autocomplete="off"
                value={schema}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="Supplier Category">Supplier Category</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="supplier category"
                name="supplier_category"
                required
                autocomplete="off"
                value={supplier_category}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="SSI Type">SSI Type</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="ssitype"
                name="ssitype"
                required
                autocomplete="off"
                value={ssitype}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="vendor_roles">Vendor Roles</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor roles"
                name="vendor_roles"
                required
                autocomplete="off"
                value={vendor_roles}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="vendor_gst">Vendor GST</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor gst"
                name="vendor_gst"
                required
                autocomplete="off"
                value={vendor_gst}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="vendor_currency">Vendor Currency</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor currency"
                name="vendor_currency"
                required
                autocomplete="off"
                value={vendor_currency}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="vendor_type">Vendor Type</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="vendor type"
                name="vendor_type"
                required
                autocomplete="off"
                value={vendor_type}
                onChange={e => onInputChange(e)}
              />
            </div>
          </div>
          <div className="col-md-12 text-center" style={{ paddingTop: '10px' }}>
            <button className="btn btn-info btn-lg">Add User</button>
          </div>
          <ToastContainer />
        </div>
        <div className="col-md 12" style={{ display: adminisVisible ? "block" : "none", marginTop: "1%",backgroundColor:"gray" }}>
          <h2>Admin Form</h2>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
