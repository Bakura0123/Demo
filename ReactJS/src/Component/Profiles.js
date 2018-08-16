import React from 'react';
import { Panel } from 'react-bootstrap';
import Data from '../Utils/Data';

class Profiles extends React.Component {
    buildUserInfo() {
        let userInfo = Data.getUserInfo();
        let template = [];
        if (userInfo != null) {
            template.push(
                <div key={1}>
                    <span>Email: {userInfo.email} </span> <br />
                    <span>Name: {userInfo.name} </span>
                </div>
            )
        }
        return template;
    }
    render() {
        let _userTemplate=this.buildUserInfo();
        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">User Information</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {_userTemplate}
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}
export default Profiles;