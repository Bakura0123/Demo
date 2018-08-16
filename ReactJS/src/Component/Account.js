import React from 'react';
import { Table, Panel } from 'react-bootstrap';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Account.css';
import Data from '../Utils/Data';



class Account extends React.Component {
    constructor(props) {
        super(props)
    }

    buildAccountList() {
        let AccountList = Data.getUserList();
        let _accountList = [];
        for (let i in AccountList) {
            _accountList.push(
                <tr key={i}>
                    <th>{i + 1}</th>
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
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">User Manager</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
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
                    </Panel.Body>
                </Panel>
            </div>

        );
    }
}
export default Account;