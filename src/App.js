import React from 'react';
import Router from './routes';
import {Provider} from 'react-redux';
import reducers from '../src/redux/store';
export default function App() {
  return (
    <Provider store={reducers}>
      <Router />
    </Provider>
  );
}
