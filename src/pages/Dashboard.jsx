import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="font-sans p-8 bg-black h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl text-yellow-400">Github Dashboard</h1>
        <div className="flex items-center mx-10 gap-1">
          <img
            src="https://avatars.githubusercontent.com/u/108338033?v=4" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
            <a
            href="https://github.com/madhanv22"
            target="_blank"
            rel="noopener noreferrer"
            className=" py-2 text-white"
            >
            madhanv22
            </a>
        </div>
      </header>

      <div className="py-6 mb-6">
        <h2 className="text-xl text-white mb-8">Hello, Madhanv22!</h2>
        <p className="text-gray-300">Welcome to your GitHub dashboard. Visit your profile for more details.</p>
      </div>
      <div>
        <Link to="/search">
          <button className="px-4 py-2 rounded-sm bg-orange-500 text-white hover:bg-green-500 hover:text-white mr-4">
            Search Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
