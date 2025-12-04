import React from "react";
import image from "../assets/prajwalT.jpeg"

const Home = () => {
  return (
    <div id="Home" className="max-w-7xl mx-auto px-6 py-12  mb-4 md:mt-5" >
        <h1 className="text-5xl font-bold text-center mb-8 mt-20" >Home</h1>
      <div className="grid md:grid-cols-2 gap-10 mb-10 mt-15 items-center">
        
        
        <div className="mb-10 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-700">Hey There!</span> <br /> <span className="text-5xl md:text-6xl">I,m Prajwal</span>
          </h2>
          <p className="text-green-700 font-bold text-3xl mb-6">
           A Data Analyst
          </p>
          <a href="#Contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
           Contact Me
          </a>
        </div>

        
        <div className="flex justify-center">
          <img
            src={image} 
            alt="Sample"
            className="rounded-full shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;

