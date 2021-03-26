import {all, takeLatest} from 'redux-saga/effects';

import {UsersTypes, User} from './users/types';
import {load} from './users/sagas';

export default function* rootSaga() {
  const users: User[] = yield all([takeLatest(UsersTypes.LOAD_REQUEST, load)]);
  return users;
}
