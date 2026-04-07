// <<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store/store';
import './App.css';
import { Navigate } from "react-router-dom";
import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import Sidebar from "./Backend Component/Side Navbar/Sidebar";
import UseStoryModal from './Project-Planner/fifth project planner/UseStoryModal';
import SurveyContainer from './Backend Component/survey recommendation/SurveyContainer';


function App() {
  return (
   
    <>
    
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpApp />} />
        <Route path="/login" element={<MainLogin />} />

        {/* Dashboard + Sidebar Container */}
        <Route path="/dashboard/*" element={ <Sidebar /> } />
        <Route path="/dashboard/survey/step_1" element = {<SurveyContainer/>} />
        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  
    {/* <UseStoryModal /> */}
    </>
   
  );
}

export default App;