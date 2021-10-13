import React, { useState, useEffect } from 'react';
import Select from 'react-select';
const options = [
    { value: 'vendor', label: 'Vendor' },
    { value: 'smsrole_user', label: 'SMS ROLE USER' },
    { value: 'client', label: 'Client' },
  ];
const Dispatch = () => {
    const [studentState, setStudentState] = useState([]);
    useEffect(() => {
        let studentState = [
            { id: 1, ic_number: "123-1", po_number: "1", poline_itemno: "10", IC_qty: "100", qty_issued_forDC: "0", qty_available_for_DC: "100", present_dc: "50", remaining: "50", bill_schedule:""},
            { id: 2, ic_number: "123-2", po_number: "2", poline_itemno: "20", IC_qty: "200", qty_issued_forDC: "0", qty_available_for_DC: "200", present_dc: "200", remaining: "0", bill_schedule:""},
            { id: 3, ic_number: "123-3", po_number: "3", poline_itemno: "30", IC_qty: "150", qty_issued_forDC: "0", qty_available_for_DC: "100", present_dc: "100", remaining: "50", bill_schedule:""}
        ];
        setStudentState(
          studentState.map(d => {
            return {
              select: false,
              id: d.id,
              ic_number: d.ic_number,
              po_number: d.po_number,
              poline_itemno: d.poline_itemno,
              IC_qty: d.IC_qty,
              qty_issued_forDC: d.qty_issued_forDC,
              qty_available_for_DC: d.qty_available_for_DC,
              present_dc: d.present_dc,
              remaining: d.remaining,
              bill_schedule: d.bill_schedule
            };
          })
        );
      }, []);
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="mt-4">
            <div className="container">
                <div class="float-right"><button type="button" class="btn btn-danger btn-lg">Generate DC</button></div><br/><br/>
            <div className="row">
                <div className="col-md-4">
                <h5><label for="exampleInputEmail1" class="form-label">PO Number</label></h5>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                </div>
                <div className="col-md-4">
                <h5><label for="exampleInputEmail1" class="form-label">Order Number</label></h5>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                </div>
                <div className="col-md-4">
                <h5><label for="exampleInputEmail1" class="form-label">Supplier</label></h5>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                </div>
            </div>
            </div>
            <table class="table table-bordered mt-4">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"><input
                            type="checkbox"
                            onChange={e => {
                            let checked = e.target.checked;
                            setStudentState(
                                studentState.map(d => {
                                d.select = checked;
                                return d;
                                })
                            );
                            }}
                        ></input></th>
                        <th scope="col">IC Number</th>
                        <th scope="col">PO Number</th>
                        <th scope="col">PO Line item no</th>
                        <th scope="col">IC qty</th>
                        <th scope="col">Qty already Issued DC</th>
                        <th scope="col">Balance Qty available for DC</th>
                        <th scope="col">Present DC</th>
                        <th scope="col">Remaining</th>
                        <th scope="col">Billing schedule No</th>
                    </tr>
                </thead>
                <tbody>
                    {studentState.map((d, i) => (
                    <tr key={d.id}>
                    <th scope="row">
                        <input
                        onChange={event => {
                            let checked = event.target.checked;
                            setStudentState(
                            studentState.map(data => {
                                if (d.id === data.id) {
                                data.select = checked;
                                }
                                return data;
                            })
                            );
                        }}
                        type="checkbox"
                        checked={d.select}
                        ></input>
                    </th>
                    <td>{d.ic_number}</td>
                    <td>{d.po_number}</td>
                    <td>{d.poline_itemno}</td>
                    <td>{d.IC_qty}</td>
                    <td>{d.qty_issued_forDC}</td>
                    <td>{d.qty_available_for_DC}</td>
                    <td><input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/></td>
                    <td>{d.remaining}</td>
                    <td>{d.bill_schedule}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Dispatch;