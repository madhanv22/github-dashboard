import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import History from './pages/History';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Dashboard />} />  
      <Route path="/github-dashboard" element={<Dashboard />} />
      <Route path="/search" element={<><Search /></>} />
      <Route path="/history" element={<><History /></>} />
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  </div>
);

export default App;
