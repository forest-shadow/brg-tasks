import React from 'react';
import { connectReduxDevtools } from 'mst-middlewares';

import App from './App';
import createStore from '../stores/createStore';
import StoreProvider from './utils/StoreProvider';

const store = createStore();

connectReduxDevtools(require('remotedev'), store);

const Root: React.FunctionComponent<{}> = () => (
  <StoreProvider value={store}>
    <App />
  </StoreProvider>
);

export default Root;
