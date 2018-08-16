import React, { Component } from 'react';
import LoginForm from './Component/LoginForm';
import Header from './Component/Header';
import AppRouter from './Component/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={logged: true, color:'red'};
    // this.state = { logged: true };
}
  // onLogout(event){
  //   this.setState({logged: false});
  //   event.preventDefault();
  // }
  
  // onLogged(){
    
  //   this.setState({logged:true});
  // }
  // onLogout(){
  //   this.setState({logged:false});
  // }

  // buildLoginForm(){
  //   let loginForm=[];
  //   if(this.state.logged === false){
  //       loginForm.push((< LoginForm onShow={this.onLogged.bind(this)} key={1}/>))
  //   }
  //   return loginForm;
  // }
  // render() {
  //   let loginForm =this.buildLoginForm();

  //   return (
  //     <div>
  //       <Header logged={this.state.logged} onLogout={this.onLogout.bind(this)}/>
  //       {loginForm}
  //     </div>
  //   );
  // }


  render(){
    return(
      <div>   
        <AppRouter  isLogged={this.state.logged}/>   
      </div>
    );
  }
}

export default App;
