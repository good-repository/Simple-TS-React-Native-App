import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import UsersList from './src/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
