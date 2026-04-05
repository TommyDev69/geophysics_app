import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SidebarContainer from "./Backend Component/Side Navbar/SidebarContainer";
import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import Sidebar from "./Backend Component/Side Navbar/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignUpApp />} />
        <Route path="/login" element={<MainLogin />} />

        {/* Dashboard + Sidebar Container */}
        <Route path="/dashboard/*" element={ <Sidebar /> } />

        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;