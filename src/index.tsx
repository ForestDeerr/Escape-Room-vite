import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { quests } from './mocks/quests';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App quests ={quests}/>
  </React.StrictMode>
);
