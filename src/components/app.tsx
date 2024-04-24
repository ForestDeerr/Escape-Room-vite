import { Route, BrowserRouter, Routes} from 'react-router-dom';

import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import Quest from '../pages/quest/quest';
import MyQuests from '../pages/my-quests/my-quests';
import Booking from '../pages/booking/booking';
import Contacts from '../pages/contacts/contacts';

import { LevelDifficultyType } from '../types/difficulty-level';
import { ThematicsList } from '../types/filters';

type AppProps = {

  levelDifficulty:LevelDifficultyType;
  ThematicList:ThematicsList;
}


function App({ levelDifficulty, ThematicList}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainPage levelDifficulty={levelDifficulty} ThematicList={ThematicList} />} />
        <Route path='/quest/:id' element={<Quest />} />
        <Route path='/myquests' element={<MyQuests />} />
        <Route path='/quest/:id/booking' element={<Booking />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
