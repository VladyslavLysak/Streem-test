import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import Thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';


const history = createBrowserHistory();
const middlewares = [Thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));