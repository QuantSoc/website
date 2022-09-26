import 'styles/App.less';
import 'styles/global.less';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import NotFoundPage from 'routes/NotFound';
import LandingPage from 'routes/LandingPage';
import AboutUsPage from 'routes/AboutUsPage';
import EventsPage from 'routes/EventsPage';
import ResourcesPage from 'routes/ResourcesPage';
import SponsorsPage from 'routes/SponsorsPage';
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
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          {/* The following route *may* just be integrated to AboutUsPage; TBA */}
          {/* <Route path="/contact" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </div>
  );
};

export default App;
