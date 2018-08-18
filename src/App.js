import React, { Component } from 'react';
import LoginForm from './Component/LoginForm';
import Header from './Component/Header';
import AppRouter from './Component/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={logged: true, color:'red'};
}



  render(){
    return(
      <div>   
        <AppRouter  isLogged={this.state.logged}/>   
      </div>
    );
  }
}

export default App;
