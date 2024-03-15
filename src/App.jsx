import 'styles/App.less';
import 'styles/global.less';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'routes/NotFoundPage';
import LandingPage from 'routes/LandingPage';
import AboutUsPage from 'routes/AboutUsPage';
import EventsPage from 'routes/EventsPage';
import ResourcesPage from 'routes/ResourcesPage';
import EventCreationPage from 'routes/EventCreationPage';
import JobsBoardPage from 'routes/JobsBoardPage';
// import SponsorsPage from 'routes/SponsorsPage';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import AdminPage from 'routes/AdminPage';
import BoardLoginPage from 'routes/BoardLoginPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import JobListingFormPage from 'routes/JobListingFormPage/JobListingFormPage';
// import FooterBar from 'components/common/FooterBar';

const App = () => {
  return (
    <BrowserRouter className="app-page">
      <div className="App">
        <NavBar />
        <Routes>
          // Public Pages 
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/jobsboard" element={<JobsBoardPage />} />
          <Route path="/boardlogin" element={<BoardLoginPage />} />
          // Pages for logged in users only
          <Route path='/admin' element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path='/eventcreation' element={<PrivateRoute />}>
            <Route path="/eventcreation" element={<EventCreationPage />} />
          </Route>
          <Route path='/joblistingform' element={<PrivateRoute />}>
            <Route path="/joblistingform" element={<JobListingFormPage />} />
          </Route>
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
