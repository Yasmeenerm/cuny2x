import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// takes the root from the DOM and inserts app.js into the root
//injecting the components into the root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
