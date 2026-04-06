// <<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store/store';
import './App.css';
import { Navigate } from "react-router-dom";
// =======
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SidebarContainer from "./Backend Component/Side Navbar/SidebarContainer";
// >>>>>>> aafe7c06fa0666a67b7ca95c610b93d82d6f2eb5
import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import Sidebar from "./Backend Component/Side Navbar/Sidebar";
// <<<<<<< HEAD
import BackLog from './Project-Planner/fifth project planner/BackLog';

// function App() {
//   return (
    // <BackLog />
// =======
// import SixSurveyContainer from "./Backend Component/Six survey recommendation/SixSurveyContainer";

function App() {
  return (
  
// >>>>>>> 1f660dcf16fab73d60fce588dc73199c80b8c5a6
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpApp />} />
        <Route path="/login" element={<MainLogin />} />

        {/* Dashboard + Sidebar Container */}
        <Route path="/dashboard/*" element={ <Sidebar /> } />
        {/* <Route path="/dashboard/survey/final_stage" element = {<SixSurveyContainer />} /> */}
        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
   
  );
}

export default App;