import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import {Provider} from 'react-redux';
import { store } from './store';

import { quests } from './mocks/quests';
import { LEVEL_DIFFICULTY } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        quests={quests}
        levelDifficulty={LEVEL_DIFFICULTY}
      />
    </Provider>
  </React.StrictMode>
);
