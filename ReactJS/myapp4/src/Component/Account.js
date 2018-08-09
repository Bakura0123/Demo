import React from 'react';
import {Header,ListGroup,ListGroupItem} from 'react-bootstrap';
import Header2 from './Header';

class Account extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <Header2 logged={true} onClick={(e) => { }} /> */}

                <ListGroup>
                    <ListGroupItem bsStyle="success">Success</ListGroupItem>
                    <ListGroupItem bsStyle="info">Info</ListGroupItem>
                    <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
                    <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
                </ListGroup>
            </div>


        );
    }
}
export default Account;