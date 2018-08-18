import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import './LoginForm.css';
import Data from '../Utils/Data';

/* props nhu mot canh cua o mot ngoi nha dong kinh */
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { loginame: "", password: "" } }
  }
  handleChange(event) {
    let data = this.state.data;
    let inputName = event.target.name;
    data[inputName] = event.target.value;
    this.setState({ data: data });
  }
  handleKeyUp(event) {
    if (event.keyCode == 13) {
      this.onSubmit();
    }
  }
  componentWillMount(event) {
    if (this.state.logged === true) {
      window.location.href = "/";
    }
  }

  getSession() {
    let session = window.localStorage.getItem("session");
    if (session != null) {
      return JSON.parse(session);
    }
    return null;
  }
  onSubmit() {
    if (this.state.data.loginame == "" || this.state.data.password == "") {
      alert("Invalid data");
    }
    else {
      let userInfo=Data.checkUser(this.state.data.loginame , this.state.data.password);
      if(userInfo != null){
        window.localStorage.setItem("session", JSON.stringify(userInfo));
        window.location.href = "/";
      }

    }
  }

  render() {
    return (


      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="loginame" type="email" value={this.props.email} placeholder="Email"/>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password"/>
          </FormGroup>
          <Button onClick={this.onSubmit.bind(this)}>Login </Button >
        </form>
      </div>
      );

  }
}
export default LoginForm;


