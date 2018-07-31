import React, { Component } from 'react';
import {Form,FormGroup,Col,ControlLabel,FormControl,Checkbox,Button} from 'react-bootstrap';
import './LoginForm.css';
/* props nhu mot canh cua o mot ngoi na dong kinh */
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={data:{loginame:"",password:""}}
    }
    onSubmit(){
        if(this.state.loginame)
        this.props.onShow();
    }
  render() {
    return (
    <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={3} >
        <FormControl type="email" value={this.props.email} placeholder="Email" />
      </Col>
    </FormGroup>
  
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={3}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
  
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">Sign in</Button>
      </Col>
    </FormGroup>
    </Form>);
    
  }
}
export default LoginForm;



