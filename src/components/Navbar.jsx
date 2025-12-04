import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#Home" className="text-2xl font-bold text-blue-600">Prajwal Tekale</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a className="hover:text-blue-600 cursor-pointer" href="#Home">Home</a>
          <a className="hover:text-blue-600 cursor-pointer" href="#About">About</a>
          <a className="hover:text-blue-600 cursor-pointer" href="#Skills">Skill</a>
          <a className="hover:text-blue-600 cursor-pointer"  href="mailto:prajwaltekale4@gmail.com">Mail</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 text-gray-700 font-medium shadow">
          <a className="hover:text-blue-600 cursor-pointer" href="#Home" >Home</a><br />
          <a className="hover:text-blue-600 cursor-pointer" href="#About">About</a><br />
          <a className="hover:text-blue-600 cursor-pointer" href="#Skills">Skill</a><br />
          <a className="hover:text-blue-600 cursor-pointer" href="mailto:prajwaltekale4@gmail.com">Mail</a><br />
        </div >
      )}
    </nav>
  );
};

export default Navbar;
