import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'vendor', label: 'Vendor' },
    { value: 'smsrole_user', label: 'SMS ROLE USER' },
    { value: 'client', label: 'Client' },
];

export default class Dispatchcc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            dispatch_data: [
                {
                    id: 1,
                    PO_Number: '123-1'
                },
                {
                    id: 2,
                    PO_Number: '123-2'
                },
                {
                    id: 3,
                    PO_Number: '123-3'
                },
            ],
            selected: [],
        };
        this.handleKeypress = this.handleKeypress.bind(this)
    }

    //===============================================================
    //Check Checkbox Function
    onChange(id) {
        let selected = this.state.selected
        // instead of using indexOf, we can use findIndex to look through array of objects
        let find = selected.findIndex(item => item.id === id)

        if (find > -1) {
            selected.splice(find, 1)
        } else {
            // We can use find to get the item based on its id
            selected.push(this.state.dispatch_data.find(item => item.id === id))
        }

        this.setState({ selected })
    }

    //=========================================

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    //===============================================
    //Check Input Value Condition
    handleKeypress(e) {
        const characterCode = e.key
        if (characterCode === 'Backspace') return

        const characterNumber = Number(characterCode)
        if (characterNumber >= 0 && characterNumber <= 9) {
            if (e.currentTarget.value && e.currentTarget.value.length) {
                return
            } else if (characterNumber === 0) {
                e.preventDefault()
            }
        } else {
            e.preventDefault()
        }
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="mt-4">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        {JSON.stringify(this.state.selected)}
                    </p>
                    <div className="container">
                        <div class="float-right"><button type="submit" class="btn btn-danger btn-lg">Generate DC</button></div><br /><br />
                        <div className="row">
                            <div className="col-md-4">
                                <h5><label for="exampleInputEmail1" class="form-label">PO Number</label></h5>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className="col-md-4">
                                <h5><label for="exampleInputEmail1" class="form-label">Order Number</label></h5>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className="col-md-4">
                                <h5><label for="exampleInputEmail1" class="form-label">Supplier</label></h5>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <table class="table table-bordered mt-4">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">
                                    <input type="checkbox" />
                                </th>
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
                            {this.state.dispatch_data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">
                                            <input type="checkbox"
                                                onChange={() => this.onChange(item.id)}
                                                selected={this.state.selected.includes(item.id)} />
                                        </th>
                                        <td>{item.PO_Number}</td>
                                        <td>10</td>
                                        <td>100</td>
                                        <td>0</td>
                                        <td>100</td>
                                        <td>50</td>
                                        <td>
                                            <input type="number" class="form-control" placeholder="DC"
                                                onKeyDown={this.handleKeypress} min='1' step='1' />
                                        </td>
                                        <td>-</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
