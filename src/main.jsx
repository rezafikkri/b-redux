import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store';
import { Provider } from 'react-redux';

import Counter from './features/counter/Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
