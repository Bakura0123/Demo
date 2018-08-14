import React from 'react';
import { Table } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const AccountList = [
    {
        email: "khachuy9667@gmail.com",
        name: "Khac huy1",
        password: "123",
        lastname: "Pham",
        firstname: "Huy"
    },
    {
        email: "khachuy966@gmail.com",
        name: "Bakura",
        password: "123",
        lastname: "Ba",
        firstname: "Ra"
    },
];

class Account extends React.Component {
    constructor(props) {
        super(props)
    }

    buildAccountList() {
        let _accountList = [];
        for (let i in AccountList) {
            _accountList.push(
                <tr key={i}>
                        <th>{i+1}</th>
                        <th>{AccountList[i].firstname}</th>
                        <th>{AccountList[i].lastname}</th>
                        <th>{AccountList[i].email}</th>
                    </tr>
                
                    
                
            )
        }
        return _accountList;
    }
    render() {
        let _accountList = this.buildAccountList();
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {_accountList}
                </tbody>
            </Table>
            

        );
    }
}
export default Account;