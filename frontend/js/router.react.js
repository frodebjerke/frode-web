import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Landing from './pages/landing.react';
import reducers from './reducers';

const reducer = combineReducers(Object.assign({}, reducers, { routing: routeReducer }));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducer)

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

module.exports = <Provider store={ store }>
  <Router history={ browserHistory }>
    <Route path="*" name="landing" component={Landing} />
  </Router>
</Provider>
