import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './components/root';
import configureStore from './store/store';


// import * as serviceWorker from './serviceWorker';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
})




