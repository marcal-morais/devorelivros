import {
  showAuthMessage,
  hideAuthLoader,
  userSignInSuccess,
  userSignOutSuccess,
  // userSignUpSuccess,
} from 'actions/Auth';
import {
  SIGNIN_USER,
  SIGNOUT_USER /* SIGNUP_USER */,
} from 'constants/ActionTypes';
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

function* signOut() {
  localStorage.removeItem('user_id');
  localStorage.clear();
  yield put(userSignOutSuccess());
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const token = payload.auth.authUser;

  if (token) {
    // api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export default function* rootSaga() {
  yield all([takeLatest('persist/REHYDRATE', setToken), fork(signOutUser)]);
}
