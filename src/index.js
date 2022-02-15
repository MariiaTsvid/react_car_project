import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={'I am from props (я з обєкту props)'} />, document.getElementById('root'));
registerServiceWorker();