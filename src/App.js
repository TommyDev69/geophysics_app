import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Fontend Component/Landing page/LandingPage';
import SignUpApp from './Fontend Component/Register page/SignUpApp';
import MainLogin from './Fontend Component/Login page/MainLogin';
import MainContainer from './Backend Component/MainContainer';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/Register" element={<SignUpApp />} />
          <Route path = "/Login" element={<MainLogin />} />
        </Routes>
      </Router> */}
      <MainContainer />


    
    </div>
  );
}

export default App;
