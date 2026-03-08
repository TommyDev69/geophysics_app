import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Landing page/LandingPage';
import SignUpApp from './Register page/SignUpApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/Register" element={<SignUpApp />} />
        </Routes>
      </Router>
      {/* <Body />
      <ProjectContainer />
      <Footer /> */}
      {/* <SignUpApp /> */}
    </div>
  );
}

export default App;
