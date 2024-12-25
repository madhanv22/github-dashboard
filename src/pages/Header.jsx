import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header