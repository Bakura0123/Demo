import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
       // this.state = { logged: true };
    }

    buildMenus() {
        let menus = [];
        if (this.props.logged) {
            menus.push((
                <Nav key={1}>
                    <NavDropdown eventKey={3} title="Account Management" id="basic-nav-dropdown">
                        <MenuItem href="/accounts" eventKey={3.1}>Account</MenuItem>
                        <MenuItem eventKey={3.2} href="/account/rules" >Another action</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="#">
                        Contact
                    </NavItem>
                </Nav>
            ));
            menus.push((
                <Nav pullRight key={2}>
                    <NavDropdown eventKey={3} title="Khac Huy" id="basic-nav-dropdown">
                        <MenuItem onClick={this.onLogout.bind(this)} eventKey={3.1}>Logout</MenuItem>
                        <MenuItem eventKey={3.2} href="/profiles" >Profiles</MenuItem>
                    </NavDropdown>
                </Nav>
            ));
        }
        return menus;
    }
    onLogout(event) {
        //this.setState({ logged: false });
        this.props.onLogout();
    }
    render() {
        let menus=this.buildMenus();
        
        return (
            <div>
            <Navbar fluid={true} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">GUNI</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                {menus}
                <Navbar.Collapse>
                    
                </Navbar.Collapse>
            </Navbar>
           
            </div>

        );
    }
}

export default Header;