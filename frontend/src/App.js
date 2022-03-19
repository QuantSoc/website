import './App.css';
import NavBar from './components/NavBar.js'
import './global.css'
import './components/NavBar.css'
import './assets/logo.png'
import Body from './components/Body.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
