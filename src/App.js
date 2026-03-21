import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import ProjectPlanner from './Project-Planner/ProjectPlanner';
// import ProjectPlanner2 from './Project-Planner/ProjectPlanner2';

// Dashboard / Sidebar Components
import Sidebar from './Backend Component/Side Navbar/Sidebar';
import SurveyContainer from './Backend Component/survey recommendation/SurveyContainer';
import SecondSurveyContaine from './second survey step/SecondSurveyContaine';
import ThirdSurveyContainer from './Backend Component/Third Survey/ThirdSurveyContainer';
import FourthSurveyContainer from './Fourth Survey/FourthSurveyContainer';
import SidebarContainer from './Backend Component/Side Navbar/SidebarContainer';
// import FourthSurveyHead from './Fourth Survey/FourthSurveyHead';
// import FourthSurveyContainer from './Fourth Survey/FourthSurveyContainer';
// import ThirdSurveySideBar from './Backend Component/Third Survey/ThirdSurveySideBar';
 import FifthSurveyContainer from './Backend Component/Fifth recommendation/FifthSurveyContainer';
 import SixSurveyContainer from './Backend Component/Six survey recommendation/SixSurveyContainer';

function App() {
  return (
    <div className='app'>

        <Router>
          <Routes> 
            {/* Public Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<SignUpApp />} />
            <Route path="/login" element={<MainLogin />} />
            <Route path="/planner" element={<ProjectPlanner />} />
    
            <Route path="/dashboard" element={<Sidebar />}/>
            <Route path="/survey" element={<SurveyContainer />} />
            <Route path="/survey/step-2" element={<SecondSurveyContaine />} />
            <Route path="/survey/step-3" element={<ThirdSurveyContainer />} />
            <Route path="/survey/step-4" element={<FourthSurveyContainer />} />
            <Route path = "/survey/step-5" element={<FifthSurveyContainer />} />
            <Route path = "/survey/step-6" element={<SixSurveyContainer />} />


          </Routes>
       </Router>


        {/* <FifthSurveyContainer /> 
        <SixSurveyContainer /> */}
    </div>
  );
}

export default App;