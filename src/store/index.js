import reducers from 'reducers/index';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';
import persistReducers from 'store/persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  const store = createStore(persistReducers(reducers), initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return { store, persistor };
}
