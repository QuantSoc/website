import 'styles/App.scss';
import 'styles/global.scss';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import NotFoundPage from 'routes/NotFound';
import LandingPage from 'routes/LandingPage';
import NavBar from 'components/common/NavBar';
import FooterBar from 'components/common/FooterBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter className="app-page">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<NotFoundPage />} />
          <Route path="/events" element={<NotFoundPage />} />
          <Route path="/resources" element={<NotFoundPage />} />
          <Route path="/sponsors" element={<NotFoundPage />} />
          <Route path="/contact" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </div>
  );
};

export default App;
