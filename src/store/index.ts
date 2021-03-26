import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {UsersState} from './users/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  users: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
