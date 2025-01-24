import React from 'react'

function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <p  className="text-white text-2xl font-bold">
        Logo
      </p>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <p className="text-white hover:text-blue-300" >HOME</p>
        <p className="text-white hover:text-blue-300">PROJECTS</p>
        <p className="text-white hover:text-blue-300">RESUME</p>
        <p className="text-white hover:text-blue-300">CONTACT</p>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </nav>
  )
}

export default Nav