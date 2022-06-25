import './App.scss';
import './global.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route ddath="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/events" element={<h1>events</h1>} />
        <Route path="/resources" element={<h1>resources</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
