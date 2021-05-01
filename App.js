import React from 'react';
import Router from './src/routes';
import {Provider} from 'react-redux';
import reducers from './src/redux/store';
console.disableYellowBox = true

export default function App() {
  return (
    <Provider store={reducers}>
      <Router />
    </Provider>
  );
}
