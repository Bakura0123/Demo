import React from 'react';

import { Well } from 'react-bootstrap';
import Header from './Header';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* <Header logged={true} onClick={(e) => { }} /> */}
                <div>
                    <Well bsSize="large">Look I'm in a large well!</Well>
                    <Well bsSize="small">Look I'm in a small well!</Well>
                </div>;
            </div>
        )
    }
}
export default Contact;
