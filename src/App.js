import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import ProjectPlanner from './Project-Planner/ProjectPlanner';

// Dashboard / Sidebar Components
import Sidebar from './Backend Component/Side Navbar/Sidebar';
import SurveyContainer from './Backend Component/survey recommendation/SurveyContainer';
import SecondSurveyContaine from './second survey step/SecondSurveyContaine';
import ThirdSurveyConnectivity from './Backend Component/Third Survey/ThirdSurveyConnectivity';
import ThirdSurveyContainer from './Backend Component/Third Survey/ThirdSurveyContainer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpApp />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/planner" element={<ProjectPlanner />} />

        {/* Dashboard / Survey Pages */}
        <Route path="/dashboard" element={<Sidebar />} />
        <Route path="/survey" element={<SurveyContainer />} />
        <Route path="/survey/step-2" element={<SecondSurveyContaine />} />
        <Route path="/survey/step-3" element={<ThirdSurveyContainer />} />
      </Routes>
    </Router>
  );
}

export default App;