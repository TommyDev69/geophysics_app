import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Landing page/LandingPage';
import SignUpApp from './Register page/SignUpApp';
import MainLogin from './Login page/MainLogin';
import ProjectPlanner from './Project-Planner/Project-Planner';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/Register" element={<SignUpApp />} />
          <Route path = "/Login" element={<MainLogin />} />
          <Route path = "/project-planner" element={<ProjectPlanner />} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
