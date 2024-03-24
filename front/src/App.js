import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro.js';
import Guide from './Pages/Guide.js';
import Login from './Pages/Login.js';
import Art from './Pages/Art.js';
import Auth from './Pages/Auth.js';
import ThreeScene from './Pages/Earth.js';



function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Earth" element={<ThreeScene/>}/>
      </Routes>
      </Router>
  );
}

export default App;
