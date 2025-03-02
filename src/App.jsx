import 'styles/App.less';
import 'styles/global.less';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'routes/NotFoundPage';
import LandingPage from 'routes/LandingPage';
// import AboutUsPage from 'routes/AboutUsPage';
import EventsPage from 'routes/EventsPage';
import ResourcesPage from 'routes/ResourcesPage';
import EventCreationPage from 'routes/EventCreationPage';
// import SponsorsPage from 'routes/SponsorsPage';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import AdminPage from 'routes/AdminPage';
import BoardLoginPage from 'routes/BoardLoginPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import JobListingFormPage from 'routes/JobListingFormPage/JobListingFormPage';
// import FooterBar from 'components/common/FooterBar';
import Mathsprint from 'routes/MathsprintPage/MathsprintPage';
import ArticlesPage from 'routes/ArticlesPage';

const App = () => {
  return (
    <BrowserRouter className="app-page">
      <div className="App">
        <NavBar />
        <Routes>
          {/* Public Pages */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/boardlogin" element={<BoardLoginPage />} />
          <Route path="/mathsprint" element={<Mathsprint />} />
          {/* Private Pages: only accessibly by Google authenticated users */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="/eventcreation" element={<PrivateRoute />}>
            <Route path="/eventcreation" element={<EventCreationPage />} />
          </Route>
          <Route path="/joblistingform" element={<PrivateRoute />}>
            <Route path="/joblistingform" element={<JobListingFormPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
