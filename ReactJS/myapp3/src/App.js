import React, { Component } from 'react';

import Welcome from './welcome';


class App extends Component {
  render() {
    return (
      <div>
        <Welcome name='react' email="huy@gmail.com"/>
      </div>
    );
  }
}
export default App;
