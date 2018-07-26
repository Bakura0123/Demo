import React from 'react';
import ReactDOM from 'react-dom';
import './huy.css';
import registerServiceWorker from './registerServiceWorker';
const Welcome=(props)=> { return <h1>Hello,{props.name}</h1>; }
const element = <Welcome name ="Sara"/>;
ReactDOM.render(element,document.getElementById('root'));
registerServiceWorker();