import './App.scss';
import './global.scss';
import {
  Routes,
  Route,
} from 'react-router-dom';

import NotFoundPage from 'routes/NotFound';
import LandingPage from 'routes/LandingPage';
import NavBar from 'components/common/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<NotFoundPage />} />
        <Route path="/events" element={<NotFoundPage />} />
        <Route path="/resources" element={<NotFoundPage />} />
        <Route path="/contact" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
