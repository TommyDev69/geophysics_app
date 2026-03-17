import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
// import MainContainer from './Backend Component/MainContainer';
import Survey from './Backend Component/survey recommendation/Survey';
import SecondSurveyContaine from './Backend Component/survey recommendation/second survey step/SecondSurveyContaine';
import SidebarContainer from './Backend Component/Side Navbar/SidebarContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/Register" element={<SignUpApp />} />
          <Route path = "/Login" element={<MainLogin />} />

          <Route path = "/Dashboard" element={<SidebarContainer /> } />
          <Route path = "/survey_recomendation" element = {<Survey />} />
          <Route path = "/survey_recomendation_step_" element = {<SecondSurveyContaine />}/>
        </Routes>
      </Router>
      
{/* <MainContainer /> */}

    
    </div>
  );
}

export default App;
