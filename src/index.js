import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'material-design-lite/material.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
