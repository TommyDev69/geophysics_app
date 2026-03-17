import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import DashboardContainer from './Backend Component/asset/DashboardContainer';
import Survey from './Backend Component/survey recommendation/Survey';
import SidebarContainer from './Backend Component/Side Navbar/SidebarContainer';
import MyProject from './Fontend Component/MyProject/MyProject';
import Sidebar from './Backend Component/Side Navbar/Sidebar';

// import MainContainer from './Backend Component/MainContainer';
// import Survey from './Backend Component/survey recommendation/Survey';
// import SecondSurveyContaine from './Backend Component/survey recommendation/second survey step/SecondSurveyContaine';
// import SidebarContainer from './Backend Component/Side Navbar/SidebarContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<SignUpApp />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/survey" element={<Sidebar/>} />
          <Route path="/project" element={<Sidebar/>} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;