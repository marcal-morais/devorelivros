import { all } from 'redux-saga/effects';
import AuthSagas from 'sagas/Auth';

export default function* rootSaga() {
  yield all([AuthSagas]);
}
