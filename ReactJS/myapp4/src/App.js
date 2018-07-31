import React, { Component } from 'react';
import LoginForm from './LoginForm.js';
import Header from './Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: true };
}
  onLogged(){
    
    this.setState({logged:true});
  }
  onLogout(){
    this.setState({logged:false});
  }

  buildLoginForm(){
    let loginForm=[];
    if(this.state.logged===false){
        loginForm.push((< LoginForm onShow={this.onLogged.bind(this)} key={1}/>))
    }
    return loginForm;
  }
  render() {
    let loginForm =this.buildLoginForm();

    return (
      <div>
        <Header logged={this.state.logged} onLogout={this.onLogout.bind(this)}/>
        {loginForm}
      </div>
    );
  }
}

export default App;
