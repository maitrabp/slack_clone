import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Stateprovider} from './Stateprovider'
import * as serviceWorker from './serviceWorker';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
