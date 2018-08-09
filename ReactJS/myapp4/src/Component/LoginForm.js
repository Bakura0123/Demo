import React, { Component } from 'react';
import {Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button} from 'react-bootstrap';
import './LoginForm.css';
/* props nhu mot canh cua o mot ngoi na dong kinh */
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={data:{loginame:"",password:""}}
    }
    handleChange(event) {
        let data = this.state.data;
        let inputName= event.target.name;
        data[inputName]= event.target.value;
        this.setState({data:data});
    }
    handleKeyUp(event){
      if(event.keyCode==13){
        this.onSubmit();
      }
    }
    onSubmit(){
        if(this.state.data.loginame =="" || this.state.data.password=="")
        {
          alert("Invalid data");
        }
        else {
          if(this.state.data.loginame === "khachuy966@gmail.com" && this.state.data.password=== "123");
          window.location.href="/";
        }
    }
    
  render() {
    return (
    <Form horizontal className="app-login-form">
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={2} >
        <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="loginame" type="email" value={this.props.email} placeholder="Email"/>
      </Col>
    </FormGroup>
  
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={2}>
        <FormControl onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
  
    <FormGroup>
      <Col smOffset={2} sm={6} xs={12} md={3} lg={3}>
        <Button className="btn-signin" type="button" onClick={this.onSubmit.bind(this)}>Sign in</Button>
      </Col>
    </FormGroup>
    </Form>);
    
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

