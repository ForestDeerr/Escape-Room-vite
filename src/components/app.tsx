import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
