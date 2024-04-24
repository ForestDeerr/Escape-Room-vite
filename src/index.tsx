import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import {Provider} from 'react-redux';
import { store } from './store';


import { LEVEL_DIFFICULTY, FILTER_THEMATIC_LIST } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        levelDifficulty={LEVEL_DIFFICULTY}
        ThematicList={FILTER_THEMATIC_LIST}
      />
    </Provider>
  </React.StrictMode>
);
