// https://github.com/danseethaler/dayone-import-wizard/projects/1
// console.clear();

('use strict');

import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

import { addFiles } from './actions';

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

document.ondragover = ev => {
  ev.preventDefault();
};
document.ondrop = ev => {
  ev.preventDefault();
  var files = Array.from(ev.dataTransfer.files).map(ob => ob.path);
  store.dispatch(addFiles(files));
};
