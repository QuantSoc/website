import 'styles/App.less';
import 'styles/global.less';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'routes/NotFoundPage';
import LandingPage from 'routes/LandingPage';
import ResourcesPage from 'routes/ResourcesPage';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Mathsprint from 'routes/MathsprintPage/MathsprintPage';
import ArticlesPage from 'routes/ArticlesPage';
import ContactPage from 'routes/ContactPage/ContactPage';

const App = () => {
  return (
    <BrowserRouter className="app-page">
      <div className="App">
        <NavBar />
        <Routes>
          {/* Public Pages */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mathsprint" element={<Mathsprint />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
