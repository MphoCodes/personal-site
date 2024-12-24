import React, { useState } from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import Footer from "../components/Footer";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educationDetails = [
    {
      institution: "Varsity College",
      degree: "Bachelor of Computer and Application Development",
      duration: "2022 - 2024",
      description: "Focused on advanced software development, IoT solutions, and AI technologies, gaining practical experience through hands-on projects.",
      icon: BookOpen
    },
    {
      institution: "Alexandra High School",
      degree: "Information Technology",
      duration: "2008 - 2020", 
      description: "Developed a strong foundation in programming, networking, and database management during my high school years.",
      icon: GraduationCap
    }
  ];

  return (
    <>
      <section 
        id="education" 
        className="min-h-screen py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center"
      >
        <div className="container mx-auto px-6">
          {/* Header with subtle animation */}
          <h2 className="text-4xl font-bold text-center mb-16 transform transition-all duration-500 hover:scale-105 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Educational Journey
          </h2>

          {/* Advanced Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full opacity-30"></div>

            {educationDetails.map((education, index) => {
              const IconComponent = education.icon;
              const isActive = activeIndex === index;

              return (
                <div 
                  key={index} 
                  className={`mb-12 flex items-center w-full ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Marker */}
                  <div className={`w-24 h-24 flex items-center justify-center 
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-110' 
                      : 'bg-gray-700 opacity-70'
                    } rounded-full shadow-lg transition-all duration-300 ease-in-out`}>
                    <IconComponent 
                      className={`${
                        isActive ? 'text-white' : 'text-gray-400'
                      } transition-colors duration-300`} 
                      size={isActive ? 36 : 28} 
                    />
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`flex-1 p-6 mx-4 rounded-xl transition-all duration-300 ease-in-out transform 
                    ${isActive 
                      ? 'bg-gray-800 border-2 border-blue-500 shadow-2xl scale-105' 
                      : 'bg-gray-800 bg-opacity-60 border border-transparent'
                    }`}
                  >
                    <h3 className={`text-2xl font-semibold mb-2 
                      ${isActive ? 'text-blue-300' : 'text-gray-300'} 
                      transition-colors duration-300`}>
                      {education.institution}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="mr-2" size={16} />
                      <span>{education.duration}</span>
                    </div>
                    <p className={`text-gray-300 
                      ${isActive ? 'opacity-100' : 'opacity-70'} 
                      transition-opacity duration-300`}>
                      {education.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Education;