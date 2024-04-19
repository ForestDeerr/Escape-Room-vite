import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import Quest from '../pages/quest/quest';
import Contacts from '../pages/contacts/contacts';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quest' element={<Quest />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
