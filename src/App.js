
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element={<LandingPage />}></Route>
        <Route exact path = 'about' element={<AboutPage />}></Route>
        <Route path = "*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
