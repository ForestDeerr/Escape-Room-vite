import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import Quest from '../pages/quest/quest';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quest' element={<Quest />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
