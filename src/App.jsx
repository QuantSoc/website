import './App.scss';
import './global.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from './components/common/NavBar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<RedirectUnimplementedHome />} />
        <Route path="/events" element={<RedirectUnimplementedHome />} />
        <Route path="/resources" element={<RedirectUnimplementedHome />} />
        <Route path="/contact" element={<RedirectUnimplementedHome />} />
        <Route path="*" element={<RedirectUnimplementedHome />} />
      </Routes>
    </BrowserRouter>
  );
}

function RedirectUnimplementedHome() {
  return (
    <div className="redirect-unimplemented-home">
      <h1>
        This page is not yet implemented.
      </h1>
      <a href="/">
        Go back to the home page.
      </a>
    </div>
  );
}

export default App;
