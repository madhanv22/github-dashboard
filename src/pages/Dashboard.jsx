import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="font-sans bg-pink-50 h-screen">
      <header className="flex border p-2 bg-black text-white justify-between items-center mb-2">
        <h1 className="text-xl md:text-2xl font-semibold">Github Dashboard</h1>
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
          className=" py-2 text-lg"
          >
          madhanv22
          </a>
        </div>
      </header>

      <div className="py-6 px-2 flex justify-center items-center mb-6 mx-1 h-auto">
        <div className='flex flex-col gap-6'>
          <h2 className="text-xl text-gray-900">Hello, Madhanv22!</h2>
          <p className="text-gray-800 text-xl">Welcome to your GitHub dashboard. Visit your profile for more details.</p>
          <Link to="/search">
            <button className="px-4 py-2 bg-orange-500 text-white hover:bg-green-500 hover:text-white mr-4">
              Search Users
            </button>
          </Link> 
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 p-1 md:px-20">Home</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 p-1 md:px-20 h-auto bg-pink-50">
        <div className="bg-white p-4 border">
          <h3 className="text-lg font-semibold text-gray-900">Inntroduction to Github</h3>
          <p className="text-gray-800"><a href="https://github.com/skills/introduction-to-github">Get started using Github in less than hour</a></p>
        </div>
        <div className="bg-white p-4 border">
          <h3 className="text-lg font-semibold text-gray-900">Github Pages</h3>
          <p className="text-gray-800"><a href="https://github.com/skills/github-pages">Create a site or blog for Github repositories with Github Pages.</a></p>
        </div>
        <div className="bg-white p-4 border">
          <h3 className="text-lg font-semibold text-gray-900">Code with Copilot</h3>
          <p className="text-gray-800"><a href="https://github.com/skills/copilot-codespaces-vscode">Develope with AI-powered code suggestions using Github Copilot, Codespaces, and VS Code.</a></p>
        </div>
        <div className="bg-white p-4 border">
          <h3 className="text-lg font-semibold text-gray-900">Hello Github Actions</h3>
          <p className="text-gray-800"><a href="https://github.com/skills/hello-github-actions">Crete a Github and use it in a workflow.</a></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
