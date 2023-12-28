import 'styles/App.less';
import 'styles/global.less';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'routes/NotFoundPage';
import LandingPage from 'routes/LandingPage';
import AboutUsPage from 'routes/AboutUsPage';
import EventsPage from 'routes/EventsPage';
import ResourcesPage from 'routes/ResourcesPage';
import EventCreationPage from 'routes/EventCreationPage';
// import SponsorsPage from 'routes/SponsorsPage';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

// import FooterBar from 'components/common/FooterBar';

const App = () => {
  return (
    <BrowserRouter className="app-page">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          {/* <Route path="/sponsors" element={<SponsorsPage />} /> */}
          {/* The following route *may* just be integrated to AboutUsPage; TBA */}
          {/* <Route path="/contact" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
