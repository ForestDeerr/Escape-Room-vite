import { Route, BrowserRouter, Routes} from 'react-router-dom';

import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import Quest from '../pages/quest/quest';
import MyQuests from '../pages/my-quests/my-quests';
import Booking from '../pages/booking/booking';
import Contacts from '../pages/contacts/contacts';

import { QuestsType } from '../types/quests';
import { LevelDifficultyType } from '../types/difficulty-level';

type AppProps = {
  quests: QuestsType;
  levelDifficulty:LevelDifficultyType;
}


function App({quests, levelDifficulty}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainPage levelDifficulty={levelDifficulty} />} />
        <Route path='/quest/:id' element={<Quest quests={quests} />} />
        <Route path='/myquests' element={<MyQuests />} />
        <Route path='/quest/:id/booking' element={<Booking />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
