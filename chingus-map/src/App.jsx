import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
        >
          <Route
            index
            element={<LandingPage />}
          />
          <Route
            path='map'
            element={<MapPage />}
          />
          <Route
            path='list'
            element={<ListPage />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
