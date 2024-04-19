import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import Quest from '../pages/quest/quest';
import MyQuests from '../pages/my-quests/my-quests';
import Booking from '../pages/booking/booking';
import Contacts from '../pages/contacts/contacts';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/quest' element={<Quest />} />
        <Route path='/myquests' element={<MyQuests />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
