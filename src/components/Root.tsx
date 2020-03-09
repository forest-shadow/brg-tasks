import React from 'react';
import { connectReduxDevtools } from 'mst-middlewares';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import createStore from '../stores/createStore';
import StoreProvider from './utils/StoreProvider';
import TaskGridDetails from './tasks/TaskGrid/TaskGridDetails';

const store = createStore();

connectReduxDevtools(require('remotedev'), store);

const Root: React.FunctionComponent<{}> = () => (
  <StoreProvider value={store}>
    <Router>
      <Route exact path="/task/:id" component={TaskGridDetails} />
      <App />
    </Router>
  </StoreProvider>
);

export default Root;
