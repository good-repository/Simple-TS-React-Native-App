import {createStore, Store} from 'redux';
import {UsersState} from './users/types';

import rootReducer from './rootReducer';

export interface ApplicationState {
  users: UsersState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
