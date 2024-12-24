import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import History from "./pages/History";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
);

export default App;
