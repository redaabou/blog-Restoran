import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddRepas from './pages/AddRepas';
import About from './pages/About';
import NavbarElement from './components/utils/NavBar';
import DisplayRepas from './pages/DisplayRepas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarElement />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addrepas' element={<AddRepas />} />
          <Route path='/about' element={<About />} />
          <Route path='/displayrepas' element={<DisplayRepas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
