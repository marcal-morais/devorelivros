import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import history from 'services/history';

import 'config/ReactotronConfig';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import configureStore from './store';

export const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
