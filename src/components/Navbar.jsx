import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black p-4 flex justify-between items-center shadow-md">
    <div className="flex gap-6">
      <Link to="/" className="text-white font-medium hover:text-blue-500">
        Home
      </Link>
      <Link to="/history" className="text-white font-medium hover:text-blue-500">
        History
      </Link>
    </div>
  </nav>
);

export default Navbar;
