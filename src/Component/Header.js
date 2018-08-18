import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { logged: true };
    }


    ComponentDidMount() {
        if (this.state.logged === false) {
            if (window.location.pathname != "/login") {
                window.location.href = "/login";
            }
        }
    }

    getSession() {
        let session = window.localStorage.getItem("session");
        if (session != null) {
            return JSON.parse(session);
        }
        return null;
    }
    buildMenus() {
        let menus = [];
        if (this.props.logged) {
            menus.push((
                <Nav key={1}>
                    <NavDropdown eventKey={3} title="Account Management" id="basic-nav-dropdown">
                        <MenuItem href="/account" eventKey={3.1}>Account</MenuItem>
                        <MenuItem eventKey={3.2} href="/account/rules">Another action</MenuItem>
                    </NavDropdown>
                    
                    <NavItem eventKey={2} href="/product">
                        Product
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
        window.localStorage.removeItem("session");
        //this.setState({ logged: false });
        //this.props.onLogout();
        window.location.href = "/login";
        event.preventDefault();
    }

    render() {
        let menus = [];
        let headerTemplate = [];
        if (this.state.logged === true && window.location.pathname != "/login") {
            menus = this.buildMenus();
            headerTemplate.push((
                <Navbar key={1} fluid={true} className="primary-color">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">
                                <img className="app-logo" src="images/logo.png" width="50px"/>
                            </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    {menus}
                </Navbar>
            ));
        }
        return (
            <div>
                {headerTemplate}
            </div>

        );
    }
}

export default Header;