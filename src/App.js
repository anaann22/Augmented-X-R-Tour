import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro.js';
import Guide from './Pages/Guide.js';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Guide" element={<Guide />} />
      </Routes>
      </Router>
  );
}

export default App;
