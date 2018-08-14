import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import './LoginForm.css';
const AccountList=[
  {
    email: "khachuy9667@gmail.com",
    name: "Khac huy1",
    password: "123"
  },
  {
    email: "khachuy966@gmail.com",
    name: "Khac huy2",
    password:"123"
  },
];

/* props nhu mot canh cua o mot ngoi na dong kinh */
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
      let userInfo=this.checkUser();
      if(userInfo != null){
        window.localStorage.setItem("session", JSON.stringify(userInfo));
        window.location.href = "/";
      }
      // if (this.state.data.loginame === "khachuy966@gmail.com" && this.state.data.password === "123") {
      //   let userInfo = {
      //     email: "khachuy966@gmail.com",
      //     name: "Khac Huy"
      //   };

      //   window.localStorage.setItem("session", JSON.stringify(userInfo));
      //   window.location.href = "/";
      // }
    }
  }
  checkUser(){
    let userInfo=null;
    for(let i in AccountList ){
      if (this.state.data.loginame === AccountList[i].email && this.state.data.password === "123") {
        userInfo=AccountList[i];
        break;
      }
    }
    return userInfo;
  }

  render() {
    return (
      // <Form horizontal className="app-login-form">
      //   <FormGroup controlId="formHorizontalEmail">
      //     <Col componentClass={ControlLabel} sm={2}>
      //       Email
      // </Col>
      //     <Col sm={2} >
      //       <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="loginame" type="email" value={this.props.email} placeholder="Email" />
      //     </Col>
      //   </FormGroup>

      //   <FormGroup controlId="formHorizontalPassword">
      //     <Col componentClass={ControlLabel} sm={2}>
      //       Password
      // </Col>
      //     <Col sm={2}>
      //       <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password" />
      //     </Col>
      //   </FormGroup>

      //   <FormGroup>
      //     <Col smOffset={2} sm={10}>
      //       <Checkbox>Remember me</Checkbox>
      //     </Col>
      //   </FormGroup>

      //   <FormGroup>
      //     <Col smOffset={2} sm={6} xs={12} md={3} lg={3}>
      //       <Button className="btn-signin" type="button" onClick={this.onSubmit.bind(this)}>Sign in</Button>
      //     </Col>
      //   </FormGroup>
      // </Form>


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

// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./LoginForm.css";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

