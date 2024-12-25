// App.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import History from './pages/History';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search" element={<><Navbar /><Search /></>} />
      <Route path="/history" element={<><Navbar /><History /></>} />
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>
  </div>
);

export default App;
