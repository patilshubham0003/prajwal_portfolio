import React from "react";
import Engg from "../assets/—Pngtree—sitting male programmer using laptop_14082622.png"

const About = () => {
  return (
    <div id="About" className="max-w-7xl mx-auto px-6 pt-16 space-y-20">
        <h1 className="text-5xl font-bold text-center mb-5 mt-5" >About</h1>
      
      <div className="grid md:grid-cols-2 gap-10 mr-10 items-center">
        
        <div className="flex justify-center">
          <img 
            src= {Engg}
            alt="About Us" 
            className="rounded-lg  w-full max-w-md" 
          />
        </div>

        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Hello! I'm Prajwal
          </h2>
          <p className="text-bg-success text-lg leading-relaxed">
            I’m a data analyst with hands-on experience transforming raw data into meaningful insights that support smarter decision-making. Skilled in tools like Excel, SQL, Python, and Power BI/Tableau, I specialize in data cleaning, visualization, and building analytical models. I enjoy uncovering trends, solving complex problems, and turning data into clear, actionable recommendations. With a strong attention to detail and a passion for continuous learning, I’m always working to improve processes and deliver data-driven outcomes.
          </p>
        </div>

        {/* Image */}
        
      </div>

    </div>
  );
};

export default About;
