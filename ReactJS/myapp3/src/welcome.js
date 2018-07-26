import React, { Component } from 'react';
import Login_form from './Login-form';

class Welcome extends Component {
  render() {
    return (
        <div>
      {<h1>Hello,{this.props.name}</h1> }
      <Login_form email={this.props.email}/>
    </div>
    );
  }
}

export default Welcome;